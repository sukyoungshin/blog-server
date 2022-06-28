const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get posts array!"
    Post: [Post!]
  }

  type Post {
    id: ID!
    title: String!
    content: String
    createDate: String
    imgSrc: String
    postUrl: String
    user: [User]
    likeInfo: [LikeInfo]
    commentInfo: [CommentInfo]
  }

  type User {
    id: ID!
    name: String!
    userId: String
  }

  type LikeInfo {
    numberOfLikes: Int
    isLikeClickUser: Boolean
  }

  type CommentInfo {
    numberOfComments: Int
  }
`;

module.exports = typeDefs;
