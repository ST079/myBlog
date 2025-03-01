const { required } = require("joi");
const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const bookmarkModel = new Schema({
  blogs: [{ type: ObjectId, required: true, ref: "Blog" }],
  user: { type: ObjectId, required: true, ref: "User" },
});

module.exports = new model("Bookmark", bookmarkModel);
