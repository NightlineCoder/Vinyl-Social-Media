// const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
// const { signToken } = require("../utils/auth");

const resolvers = {
  // CODE GOES HERE
  Query: {
    users: async () => {
      return User.find({}).populate("friends");
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
  },
};

module.exports = resolvers;
