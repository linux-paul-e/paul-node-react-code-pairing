const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: 'http://localhost:4002' },
    { name: 'posts', url: 'http://localhost:4001' }
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server
  .listen(4000)
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  })
  .catch(e => {
    console.log(e);
  });
