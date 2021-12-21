const { resolvers } = require('./posts');
const allPosts = require('./../data/posts');

describe('Posts Resolvers', () => {
  const {Query} = resolvers;
  it('should return all posts', () => {
    const posts = Query.allPosts();

    expect(posts).toEqual(allPosts);
  });
});
