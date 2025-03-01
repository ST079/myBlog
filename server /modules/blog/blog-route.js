const router = require("express").Router();
const blogController = require("./blog.controller");
const { checkRole } = require("../../utils/session-manager");
const { blogValidate } = require("./blog.validation");

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
