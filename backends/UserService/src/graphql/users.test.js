const { resolvers } = require('./users');
const allUsers = require('./../data/users');

describe('Users Resolvers', () => {
  const {Query} = resolvers;
  it('should return all users', () => {
    const users = Query.allUsers();

    expect(users).toEqual(allUsers);
  });
});
