
const { ApolloServer } = require('apollo-server');
const typeDefs         = require('./types');
const mocks            = require('./mocks');

const server = new ApolloServer({
  cors: { origin: '*' }, //https://bender.hktr.de/' },
  playground: false,
  typeDefs,
  mocks
});

server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});