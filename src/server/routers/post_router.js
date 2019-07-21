const { Router } = require('express');
const router = new Router;

const Post = require(`../models/post_model`);
const authenticateUser = require('../middleware/authenticate_user');

const { APIPostPathsEndpointsEnum } = require('../utils/enums');
const Paths = APIPostPathsEndpointsEnum;

/** POST A NEW POST AND SET ITS AUTHOR AS THE CONNECTED AUTHENTICATED USER THAT SENT THE REQUEST **/
router.post(`/${Paths.Posts}`, authenticateUser, async (req, res) => {
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
router.get(`/${Paths.Posts}`, authenticateUser, async (req, res) => {
  try {
    const posts = await Post.find({});
    res.send(posts);
  } catch (e) {
    res.status(400).send(e);
  }
});

/** GET ALL POSTS OF THE SPECIFIC LOGGED IN AUTHENTICATED USER **/
router.get(`/${Paths.Posts}/${Paths.SelfPosts}`, authenticateUser, async (req, res) => {
  try {
    await req.userFromAuth.populate('posts').execPopulate();
    res.send(req.userFromAuth.posts);
  } catch (e) {
    res.status(400).send(e);
  }
});

/** GET A SPECIFIC POST BY IT'S UNIQUE ID, REQUIRING THE AUTHOR TO BE THE LOGGED IN AUTHENTICATED USER TO VIEW THIS **/
router.get(`/${Paths.Posts}/${Paths.Id}`, authenticateUser, async (req, res) => {
  try {
    const _id = req.params.id;
    const author = req.userFromAuth._id;
    const task = await Post.findOne( { _id, author } );

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;