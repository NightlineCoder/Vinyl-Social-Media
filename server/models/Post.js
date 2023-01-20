const { Schema, model } = require("mongoose");
// const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  // CODE GOES HERE
  postText: {
    type: String,
    required: "Posts can't be empty!",
    minlength: 1,
    maxlength: 300,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const Post = model("Post", postSchema);

module.exports = Post;
