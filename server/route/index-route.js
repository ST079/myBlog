const router = require("express").Router();
const userRouter = require("../modules/user/user.route");
const blogRouter = require("../modules/blog/blog-route");

router.use("/users", userRouter);
router.use("/blogs", blogRouter);

module.exports = router;
