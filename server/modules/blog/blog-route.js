const router = require("express").Router();
const blogController = require("./blog.controller");
const { checkRole } = require("../../utils/session-manager");
const { blogValidate } = require("./blog.validation");
const multer = require("multer");
const { validate } = require("./blog.validation");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/blogs");
  },
  filename: function (req, file, cb) {
    const imageName = "image".concat(
      "-",
      Date.now(),
      ".",
      file.originalname.split(".").pop()
    );
    cb(null, imageName);
  },
});

// HW file size each max 1MB
// HW file type png, jpeg, jpg
const upload = multer({ storage: storage });

router.post(
  "/",
  upload.single("pictureUrl"),
  checkRole(["user", "admin"]),
  validate,
  async (req, res, next) => {
    try {
      if (req.file) {
        req.body.pictureUrl = req.file.path.replace("public", "");
      }
      const result = await Controller.create(req.body);
      res.json({ data: result });
    } catch (e) {
      next(e);
    }
  }
);

router.get("/all-blogs", async (req, res, next) => {
  try {
    const result = await blogController.getAllBlogs();
    res.json({ msg: result });
  } catch (error) {
    next(error);
  }
});

router.get("/my-blogs", checkRole(["user"]), async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const result = await Controller.getAuthorBlogs(
      req.currentUser,
      page,
      limit
    );
    res.json({ data: result });
  } catch (e) {
    next(e);
  }
});

router.get(
  "/published-only",
  async (req, res, next) => {
    try {
      const { page, limit, title, author } = req.query;
      const search = { title, author };
      const result = await blogController.getPublishedBlogs(
        search,
        page,
        limit
      );
      res.json({ data: result });
    } catch (error) {
      next(error);
    }
  }
);

router.post("/", checkRole(["admin", "user"]), async (req, res, next) => {
  try {
    req.body.author = req.body.author || req.currentUser;
    const result = await blogController.create(req.body);
    res.json({ msg: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
