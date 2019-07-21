const { Router } = require('express');
const router = new Router;

const User = require(`../models/user_model`);
const authenticateUser = require('../middleware/authenticate_user');

const { APIUserPathsEndpointsEnum } = require('../utils/enums');
const Paths = APIUserPathsEndpointsEnum;

/** CREATE A NEW USER **/
router.post(`/${Paths.Users}`, async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    await user.generateAuthToken();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

/** GET ALL USERS, REQUIRING TO BE A LOGGED IN AUTHENTICATED USER TO VIEW THIS - IT'S NOT SECURED ! **/
router.get(`/${Paths.Users}`, authenticateUser, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

/** LOGIN A USER **/
router.post(`/${Paths.Users}/${Paths.Login}`, async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    await user.generateAuthToken();
    res.send(user);
  } catch (e) {
    res.status(400).send();
  }
});

/** LOGOUT A CONNECTED USER, REQUIRING TO BE THE CONNECTED AUTHENTICATED USER TO DO SO **/
router.post(`/${Paths.Users}/${Paths.Logout}`, authenticateUser, async (req, res) => {
  try {
    req.userFromAuth.token = null;
    await req.userFromAuth.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

/** GET ALL USER's INFO OF THE SPECIFIC LOGGED IN AUTHENTICATED USER **/
router.get(`/${Paths.Users}/${Paths.SelfInfo}`, authenticateUser, async (req, res) => {
  res.send(req.userFromAuth);
});

module.exports = router;