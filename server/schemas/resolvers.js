const { AuthenticationError } = require("apollo-server-express");
const { User, Note } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  // CODE GOES HERE
  Query: {
    users: async () => {
      return User.find({}).populate("friends");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("notes");
    },

    notes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Note.find(params).sort({ createdAt: -1 });
    },

    note: async (parent, { noteId }) => {
      return Note.findOne({ _id: noteId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("notes");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addFriend: async (parent, { userId, friendId }) => {
      let user = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { friends: friendId } }
      ).populate("friends");
      return user;
    },

    addNote: async (parent, { noteText }, context) => {
      if (context.user) {
        const note = await Note.create({
          noteText,
          noteAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { notes: note._id } }
        );

        return note;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
