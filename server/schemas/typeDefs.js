const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    friends: [User]
    posts: [Post]
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Post]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFriend(userId: ID!, friendId: ID!): Auth
    addPost(postText: String!, userId: ID!, postAuthor: String!): User
  }
`;

module.exports = typeDefs;
