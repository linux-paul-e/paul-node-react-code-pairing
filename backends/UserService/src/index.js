const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const { typeDefs, resolvers } = require('./graphql/users');

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});

server
  .listen(4002)
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  })
  .catch(e => console.log(e));
