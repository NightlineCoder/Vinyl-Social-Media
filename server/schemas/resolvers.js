const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
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

    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },

    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
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
        throw new AuthenticationError("Email or password is incorrect");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Email or password is incorrect");
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

    addPost: async (parent, { postText }, context) => {
      if (context.user) {
        const post = await Post.create({
          postText,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addComment: async (parent, { postText }, context) => {
      if (context.user) {
        const comment = await Post.create({
          postText,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { comments: comment._id } }
        );

        return comment;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
