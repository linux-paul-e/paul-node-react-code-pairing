const { gql } = require('apollo-server');
const posts = require('./../data/posts');

const typeDefs = gql`
  type Query {
    allPosts: [Post]
  }

  type Post {
    id: ID!
    title: String
    body: String
    authorId: String
  }
`;

const resolvers = {
  Query: {
    allPosts() {
      return posts;
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
