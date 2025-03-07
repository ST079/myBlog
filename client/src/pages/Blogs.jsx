import React, { useEffect, useState } from "react";
import { useBlogContext } from "../contexts/BlogContext";
import Logo from "../assets/logo.png";
import "./Blogs.css";
import { BlogLoader } from "../components/Loader";
import { DateFotmatter } from "../utils/date";
import { Link } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import Pagination from "../components/Pagination";

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [sortValue, setSortValue] = useState("");
  // const [sortBy, setSortBy] = useState("date");

  const {
    blogs,
    loading,
    err,
    msg,
    setTitle,
    setSort,
    limit,
    page,
    setLimit,
    setPage,
  } = useBlogContext();
  const handelErrorImg = (e) => {
    e.target.src = Logo;
  };

  // console.log("limit value bog:", limit);


  const { delayTerm } = useDebounce({ title: search });

  useEffect(() => {
    if (delayTerm) {
      setTitle(delayTerm);
      setSortValue("");
      setSort("");
    }
    if (sortValue) {
      setSort(sortValue);
      setTitle("");
    }
  }, [setTitle, delayTerm, setSort, sortValue]);

  // const handleSort = (criteria) => {
  //   setSortBy(criteria);
  // };
  // // const filteredBlogs = blogs?.data?.filter((blog) =>
  // //   blog.title.toLowerCase().includes(search.toLowerCase())
  // // );

  // const filteredBlogs = blogs?.data
  // ?.filter((blog) =>
  //   blog?.title.toLowerCase().includes(search.toLowerCase())
  // )
  // ?.sort((a, b) => {
  //   if (sortBy === "name") {
  //     return a.title.localeCompare(b.title); // Sort alphabetically
  //   } else {
  //     return new Date(b.createdAt) - new Date(a.createdAt); // Sort by date (latest first)
  //   }
  // });

  return (
    <div className="p-4">
      {/* search */}
      <h2>Blogs</h2>
      <div className="search mb-4 d-flex justify-content-between">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Blogs"
          className="w-50"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <select
          className="form-select"
          style={{ maxWidth: "200px" }}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="alphabetical-a-z">A-Z</option>
          <option value="alphabetical-z-a">Z-A</option>
        </select>
      </div>

      <div className="count d-flex mb-4 fw-bold ">
        <li className="list-unstyled pe-4">
          <Link to="#" className="text-decoration-none text-secondary active">
            Published{" "}
            <span className="badge text-bg-secondary"> {blogs?.total}</span>
          </Link>
        </li>
      </div>

      {/* <!-- Blog Data --> */}
      <div className="row">
        {loading && (
          <>
            <BlogLoader />
            <BlogLoader />
          </>
        )}
        {blogs &&
          blogs?.data.length > 0 &&
          blogs.data.map((blog) => {
            return (
              <div key={blog?.slug} className="col-md-6 col-sm-12">
                <div
                  className="card mb-3 border-0"
                  style={{ maxWidth: "540px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="card-head d-flex justify-content-between align-items-center mb-2">
                          <button className="custom cursor-pointer">
                            {blog?.status}
                          </button>
                          <p>{DateFotmatter(blog?.createdAt)}</p>
                        </div>
                        <h6 className="card-title">
                          {blog?.title.slice(0, 20) + " ..."}
                        </h6>
                        <p
                          className="card-text lh-sm"
                          style={{ fontSize: "14px" }}
                        >
                          {blog?.content.slice(0, 100) + " ..."}
                        </p>
                        <div className="card-text d-flex justify-content-between align-items-center">
                          <div className="blog-btns">
                            <button className="blog-btn btn">
                              <i className="fa-solid fa-ellipsis fs-6"></i>
                            </button>
                            <button className="blog-btn btn">
                              <i className="fa-duotone fa-solid fa-bookmark"></i>
                            </button>
                          </div>

                          <p className="text-body-secondary blog-details">
                            <i className="fa-regular fa-id-card"></i>{" "}
                            {blog?.author}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <img
                        src={blog?.pictureUrl || ""}
                        className="img-fluid rounded-start default-img"
                        alt="..."
                        onError={(e) => {
                          handelErrorImg(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* pagination */}
      <Pagination
      data={blogs}
        limit={limit}
        page={page}
        setLimit={setLimit}
        setPage={setPage}
      ></Pagination>
    </div>
  );
};

export default Blogs;
