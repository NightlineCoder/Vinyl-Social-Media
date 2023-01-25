import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query Query($username: String) {
    posts(username: $username) {
      postText
      _id
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_USER_POSTS = gql`
  query Query {
    userPosts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
`;
