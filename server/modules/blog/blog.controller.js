const blogModel = require("./blog.model");
const bookmarkModel = require("../bookmark/bookmark-model");
const { slugGenerator } = require("../../utils/textPraser");
//  CRUD

//create
const create = (payload) => {
  payload.slug = slugGenerator(payload.title);
  return blogModel.create(payload);
};

const getPublishedBlogs = async (search, page = 1, limit = 5) => {
  const query = [];
  if (search?.title) {
    query.push({
      $match: {
        title: new RegExp(search?.title, "gi"),
        status: "published",
      },
    });
  }
  // pagination
  query.push(
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $unwind: {
        path: "$author",
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $project: {
        author: "$author.name",
        title: 1,
        slug: 1,
        content: 1,
        status: 1,
        duration: 1,
        createdAt: 1,
        updatedAt: 1,
        pictureUrl: 1,
        _id: 0,
      },
    },
    {
      $match: {
        status: "published",
      },
    },
    {
      $facet: {
        metadata: [
          {
            $count: "total",
          },
        ],
        data: [
          {
            $skip: (+page - 1) * +limit,
          },
          {
            $limit: +limit,
          },
        ],
      },
    },
    {
      $addFields: {
        total: {
          $arrayElemAt: ["$metadata.total", 0],
        },
      },
    },
    {
      $project: {
        metadata: 0,
      },
    }
  );

  if (search?.author) {
    query.push({
      $match: {
        author: new RegExp(search?.author, "gi"),
      },
    });
  }
  const result = await blogModel.aggregate(query);
  return {
    data: result[0].data,
    total: result[0].total || 0,
    page: +page,
    limit: +limit,
  };
};

const getAllBlogs=()=>{
  return blogModel.aggregate([
    {
      $lookup: {
        from: 'users', 
        localField: 'author', 
        foreignField: '_id', 
        as: 'author'
      }
    }, {
      $unwind: {
        path: '$author', 
        preserveNullAndEmptyArrays: false
      }
    }, {
      $project: {
        title: 1, 
        author: '$author.name', 
        status:1,
        pages: 1
      }
    }
  ])
}
module.exports = { create, getPublishedBlogs ,getAllBlogs};
