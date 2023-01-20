const { Schema, model } = require("mongoose");
// const dateFormat = require('../utils/dateFormat');

const noteSchema = new Schema({
  // CODE GOES HERE
  thoughtText: {
    type: String,
    required: "Notes can't be empty!",
    minlength: 1,
    maxlength: 300,
    trim: true,
  },
  thoughtAuthor: {
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
      ref: "Note",
    },
  ],
});

const Note = model("Note", noteSchema);

module.exports = Note;
