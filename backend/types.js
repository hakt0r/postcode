
const { gql } = require('apollo-server');

module.exports = gql`

type User {
  id: ID!
  name: String!
  age: Int!
  email: String!
}

type Query {
  users: [User]
}

`;