const { AuthenticationError, ForbiddenError } = require('./utils/errors');

const resolvers = {
  Host: {
    __resolveReference: (user, { dataSources }) => {
      return dataSources.accountsAPI.getUser(user.id);
    },
 },
 Guest: {
  __resolveReference: (user, { dataSources }) => {
      return dataSources.accountsAPI.getUser(user.id);
    },
  },
  User: {
    __resolveType(user) {
      return user.role;
    },
  },
};

module.exports = resolvers;
