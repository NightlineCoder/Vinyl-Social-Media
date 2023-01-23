const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  // CODE GOES HERE
  Query: {
    users: async () => {
      return User.find({}).populate("friends").populate("posts");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("friends").populate("posts");
    },

    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 }).populate("comments");
    },

    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId }).populate("comments");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("friends")
          .populate("posts");
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

    addFriend: async (parent, { userId, friendId }, context) => {
      if (context.user) {
        let user = await User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate("friends");
        return user;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    removeFriend: async (parent, { userId, friendId }, context) => {
      if (context.user) {
        let user = await User.findOneAndUpdate(
          { _id: userId },
          { $pull: { friends: friendId } },
          { new: true }
        ).populate("friends");
        return user;
      }
    },

    addPost: async (parent, { postText }, context) => {
      console.log(context);
      if (context.user) {
        const post = await Post.create({
          postText,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } },
          { new: true }
        );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } },
          { new: true }
        );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addComment: async (parent, { postText, postId }, context) => {
      if (context.user) {
        const post = await Post.create({
          postText,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );
        await Post.findByIdAndUpdate(
          { _id: postId },
          { $addToSet: { comments: post._id } }
        );
        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // add likes functionality
    addLikes: async (parent, { postId }) => {
      const likes = await Post.findOneAndUpdate(
        {
          _id: postId,
        },
        { $inc: { likes: 1 } },
        { new: true }
      );

      return likes;
    },

    removeLikes: async (parent, { postId }) => {
      const likes = await Post.findOneAndUpdate(
        {
          _id: postId,
        },
        { $inc: { likes: -1 } },
        { new: true }
      );

      return likes;
    },
  },
};

module.exports = resolvers;
