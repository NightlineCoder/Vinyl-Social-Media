const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    friends: [User]
    notes: [Note]
  }

  type Note {
    _id: ID
    noteText: String
    noteAuthor: String
    createdAt: String
    comments: [Note]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    notes(username: String): [Note]
    note(noteId: ID!): Note
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFriend(userId: ID!, friendId: ID!): User
    addNote(noteText: String!): Note
  }
`;

module.exports = typeDefs;
