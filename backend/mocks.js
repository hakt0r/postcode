

const faker        = require('faker');
const { MockList } = require('apollo-server');

module.exports = {
  Query: () => ({
    users: () => new MockList([10,20])
  }),
  User: () => ({
    name:  faker.name.firstName(),
    email: faker.internet.email(),
    age:   18 + faker.random.number(18,50),
    id:    faker.random.uuid()
  })
};
