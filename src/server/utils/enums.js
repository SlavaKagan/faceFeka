module.exports = {
  APICollectionsModelsEnum: {
    Users: {
      modelName: 'User',
      collectionNameDB: 'users'
    },
    Posts: {
      modelName: 'Post',
      collectionNameDB: 'posts'
    },
    Comments: {
      modelName: 'Comment',
      collectionNameDB: 'comments'
    }
  },

  APIUserPathsEndpointsEnum: {
    Users: 'users',
    NonFriends: 'nonfriends',
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

  APICommentPathsEndpointsEnum: {
    Comments: 'comments',
    PostSelfComments: 'postselfcomments'
  },

  PrivacyOptionsEnum: {
    Global: 'Global',
    Private: 'Private'
  }
};