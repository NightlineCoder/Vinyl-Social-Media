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
    createUser: async (parent, { username, email, password }) => {
      let user = await User.create({ username, email, password });
      return user;
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
