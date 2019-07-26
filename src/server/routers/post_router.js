const { Router } = require('express');
const router = new Router;

const Post = require(`../models/post_model`);
const User = require(`../models/user_model`);
const authenticateUser = require('../middleware/authenticate_user');
const { PrivacyOptionsEnum } = require('../utils/enums');

const { Posts, SelfPosts, FriendsPosts } = require('../utils/enums').APIPostPathsEndpointsEnum;


/** POST A NEW POST AND SET ITS AUTHOR AS THE CONNECTED AUTHENTICATED USER THAT SENT THE REQUEST **/
router.post(`/${Posts}`, authenticateUser, async (req, res) => {
  try {
    const post = new Post({
      ...req.body,
      author: req.userFromAuth._id
    });

    await post.save();
    res.status(201).send(post);
  } catch (e) {
    res.status(400).send(e);
  }
});

/** GET ALL POSTS OF ALL USERS, REQUIRING TO BE A LOGGED IN AUTHENTICATED USER TO VIEW THIS - IT'S NOT SECURED ! **/
router.get(`/${Posts}`, /*authenticateUser,*/ async (req, res) => {
  try {
    const posts = await Post.find({});
    res.send(posts);
  } catch (e) {
    res.status(400).send(e);
  }
});

/** GET ALL POSTS OF THE SPECIFIC LOGGED IN AUTHENTICATED USER **/
router.get(`/${Posts}/${SelfPosts}`, authenticateUser, async (req, res) => {
  const path = Posts;
  const match = {};
  const options = {
    limit: parseInt(req.query.limit),
    skip: parseInt(req.query.skip)/*,
    sort: null*/
  };

  if (req.query.sortBy) {
    const request = req.query.sortBy.split(':');
    const by = request[0];
    options.sort[by] = request[1].toLowerCase() === 'desc' ? -1 : 1;
  }

  try {
    await req.userFromAuth.populate({
      path,
      match,
      options
    }).execPopulate();
    res.send(req.userFromAuth.posts);
  } catch (e) {
    res.status(500).send(e);
  }
});

/** GET ALL FRIENDS POSTS OF THE SPECIFIC LOGGED IN AUTHENTICATED USER **/
router.get(`/${Posts}/${FriendsPosts}`, authenticateUser, async (req, res) => {
  try {
    const allUsers = await User.find({});
    let allFriendsPosts = [];

    await req.userFromAuth.populate(Posts).execPopulate();
    allFriendsPosts = allFriendsPosts.concat(req.userFromAuth.posts);

    for (const user of allUsers) {
      if (user.friends.includes(req.userFromAuth._id)) {
        await user.populate(Posts).execPopulate();
        const globalPostsArr = user.posts.filter((post) => post.privacy !== PrivacyOptionsEnum.Private);
        // TEST THE FILTER - STILL NOT CHECKED !
        allFriendsPosts = allFriendsPosts.concat(user.posts);
      }
    }

    res.send(allFriendsPosts);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;