import { gql } from "@apollo/client";

// TODO: mutations needed:
//
// .addUser
// .login
// .addPost
// .removePost
// .addComment
// .addLikes
// .removeLikes
// .addFriend
// .removeFriend
//
//
//
//

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				email
				password
				username
			}
		}
	}
`;

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				email
				password
				username
			}
		}
	}
`;

export const ADD_POST = gql`
	mutation addPost($postText: String!) {
		addPost(postText: $postText) {
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

export const REMOVE_POST = gql`
	mutation removePost($postId: ID!) {
		removePost(postId: $postId) {
			_id
			postAuthor
			postText
		}
	}
`;
export const ADD_COMMENT = gql`
	mutation addComment($postText: String!, $postId: ID!) {
		addComment(postText: $postText, postId: $postId) {
			_id
			createdAt
			postAuthor
			postText
		}
	}
`;

export const ADD_LIKE = gql`
	mutation addLikes($postId: ID!) {
		addLikes(postId: $postId) {
			_id
			postAuthor
		}
	}
`;

export const REMOVE_LIKE = gql`
	mutation removeLikes($postId: ID!) {
		removeLikes(postId: $postId) {
			_id
			postAuthor
		}
	}
`;
export const ADD_FRIEND = gql`
	mutation addFriend($userId: ID!, $friendId: ID!) {
		addFriend(userId: $userId, friendId: $friendId) {
			_id
			username
			posts {
				_id
				likes
				postAuthor
				postText
				comments {
					_id
					likes
					postAuthor
					postText
				}
			}
		}
	}
`;
export const REMOVE_FRIEND = gql`
	mutation removeFriend($userId: ID!, $friendId: ID!) {
		removeFriend(userId: $userId, friendId: $friendId) {
			_id
			username
		}
	}
`;
