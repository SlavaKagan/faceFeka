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
    Login: 'login',
    Logout: 'logout',
    VerifyToken: 'verifytoken',
    SelfInfo: 'selfinfo',
    AddFriendship: 'addfriendship'
  },

  APIPostPathsEndpointsEnum: {
    Posts: 'posts',
    SelfPosts: 'selfposts',
    FriendsPosts: 'friendsposts'
  },

  PrivacyOptionsEnum: {
    Global: 'Global',
    Private: 'Private'
  }
};