const { AuthenticationError } = require("apollo-server-express");
const { User, Note } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  // CODE GOES HERE
};

module.exports = resolvers;
