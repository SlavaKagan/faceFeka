const { Router } = require('express');
const router = new Router;

const Post = require(`../models/post_model`);
const User = require(`../models/user_model`);
const Comment = require(`../models/comment_model`);
const authenticateUser = require('../middleware/authenticate_user');

const {
  Comments,
  PostSelfComments
} = require('../utils/enums').APICommentPathsEndpointsEnum;


/** POST A NEW COMMENT AND SET ITS AUTHOR AS THE CONNECTED AUTHENTICATED USER THAT SENT THE REQUEST **/
router.post(`/${Comments}`, authenticateUser, async (req, res) => {
  try {
    const comment = new Comment({
      ...req.body,
      author: req.userFromAuth._id/*,
      post: */
    });

    await comment.save();
    res.status(201).send(comment);
  } catch (e) {
    res.status(400).send(e);
  }
});

/** GET ALL COMMENTS OF ALL USERS TO ALL POSTS, REQUIRING TO BE A LOGGED IN AUTHENTICATED USER TO VIEW THIS - IT'S NOT SECURED ! **/
router.get(`/${Comments}`, /*authenticateUser,*/ async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.send(comments);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;