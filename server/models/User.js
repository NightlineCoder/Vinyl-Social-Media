const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");

const userSchema = new Schema({
  // CODE GOES HERE
  username: {
    type: String,
    Unique: true,
    Required: true,
    trim: true,
  },
  email: {
    type: String,
    Required: true,
    Unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    Required: true,
    minlength: 8,
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   "Please fill a valid email address",
    // ],
  },

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  //   friends: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "User",
  //     },
  //   ],
  // },
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false,
});

const User = model("User", userSchema);

module.exports = User;
