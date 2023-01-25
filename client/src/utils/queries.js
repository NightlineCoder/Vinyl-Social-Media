import { gql } from "@apollo/client";

// TODO: queries needed:
//
// .post (postID)
// .posts (by username)
// .user (by username)
// .users (all users)
//
//
// TESTING NEEDED 1/24 15:02

export const QUERY_ME = gql`
	query me {
		me {
			_id
			email
			friends {
				_id
				email
				username
			}
			posts {
				_id
				createdAt
				likes
				postAuthor
				postText
				comments {
					_id
					createdAt
					likes
					postAuthor
					postText
				}
			}
			username
		}
	}
`;

export const QUERY_POST = gql`
	query post($postId: ID!) {
		post(postId: $postId) {
			_id
			createdAt
			likes
			postAuthor
			postText
			comments {
				_id
				createdAt
				likes
				postAuthor
				postText
			}
		}
	}
`;

export const QUERY_POSTS = gql`
	query posts($username: String) {
		posts(username: $username) {
			_id
			comments {
				_id
				createdAt
				likes
				postAuthor
				postText
			}
			createdAt
			likes
			postAuthor
			postText
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
export const QUERY_USER = gql`
	query user($username: String!) {
		user(username: $username) {
			_id
			email
			friends {
				_id
				email
				posts {
					_id
					likes
					postAuthor
					postText
				}
				username
			}
			password
			posts {
				_id
				createdAt
				comments {
					_id
					createdAt
					likes
					postAuthor
					postText
				}
				likes
				postAuthor
				postText
			}
			username
		}
	}
`;

export const QUERY_USERS = gql`
	query users {
		users {
			_id
			email
			friends {
				_id
				email
				username
			}
			username
			posts {
				_id
				createdAt
				likes
				postAuthor
				postText
			}
		}
	}
`;
