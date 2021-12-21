const { gql } = require('apollo-server');
const users = require('./../data/users');

const typeDefs = gql`
  type Query {
    allUsers: [User]
  }

  type User {
    id: ID!
    name: String
    age: Int
  }
`;

const resolvers = {
  Query: {
    allUsers() {
      return users;
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
