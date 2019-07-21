module.exports = {
  APICollectionsModelsEnum: {
    Users: {
      modelName: 'User',
      collectionNameDB: 'users'
    },
    Posts: {
      modelName: 'Post',
      collectionNameDB: 'posts'
    }
  },

  APIUserPathsEndpointsEnum: {
    Users: 'users',
    Id: ':id',
    Login: 'login',
    Logout: 'logout',
    SelfInfo: 'selfinfo'
  },

  APIPostPathsEndpointsEnum: {
    Posts: 'posts',
    Id: ':id',
    SelfPosts: 'selfposts'
  },

  PrivacyOptionsEnum: {
    Global: 'Global',
    Private: 'Private'
  }
};