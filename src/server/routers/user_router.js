const { Router } = require('express');
const router = new Router;

const User = require(`../models/user_model`);
const authenticateUser = require('../middleware/authenticate_user');

const {
  Users,
  NonFriends,
  Login,
  Logout,
  VerifyToken,
  SelfInfo,
  AddFriendship
} = require('../utils/enums').APIUserPathsEndpointsEnum;

/** CREATE A NEW USER **/
router.post(`/${Users}`, async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    await user.generateAuthToken();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

/** GET ALL USERS, REQUIRING TO BE A LOGGED IN AUTHENTICATED USER TO VIEW THIS **/
router.get(`/${Users}`, authenticateUser, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

/** GET ALL USER's NON FRIENDS AND FILTER NAME, REQUIRING TO BE A LOGGED IN AUTHENTICATED USER TO VIEW THIS **/
router.get(`/${Users}/${NonFriends}/:term`, authenticateUser, async (req, res) => {
  try {
    const term = req.params.term;
    const users = await User.find({});

    const afterFilter = users.filter(user =>
      !req.userFromAuth.friends.includes(user._id) &&
      user.id != req.userFromAuth._id);

    const termFilter = afterFilter.filter(user =>
      user.name.first.includes(term) ||
      user.name.last.includes(term));

    const chosenFilter = (term === '*' || term === '') ? afterFilter : termFilter;
    res.send(chosenFilter);
  } catch (e) {
    res.status(400).send(e);
  }
});

/** LOGIN A USER **/
router.post(`/${Users}/${Login}`, async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    await user.generateAuthToken();
    res.send(user);
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});

/** LOGOUT A CONNECTED USER, REQUIRING TO BE THE CONNECTED AUTHENTICATED USER TO DO SO **/
router.post(`/${Users}/${Logout}`, authenticateUser, async (req, res) => {
  try {
    req.userFromAuth.token = null;
    await req.userFromAuth.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

/** VERIFY TOKEN OF REQUESTER USER **/
router.get(`/${VerifyToken}`, authenticateUser, async (req, res) => {
  try {
    res.send(req.userFromAuth);
  } catch (e) {
    console.log(e);
  }
});

/** GET ALL USER's INFO OF THE SPECIFIC LOGGED IN AUTHENTICATED USER **/
router.get(`/${Users}/${SelfInfo}`, authenticateUser, async (req, res) => {
  res.send(req.userFromAuth);
});

router.patch(`/${Users}/${AddFriendship}/:id`, authenticateUser, async (req,res) => {
  try {
    if (req.userFromAuth._id.toString() === req.params.id) {
      return res.status(400).send({ error: "Can't add yourself to your friends!" });
    }

    if (req.userFromAuth.friends.includes(req.params.id)) {
      return res.status(400).send({ error: "This user is already your friend!" });
    }

    const user1AfterFriendship = await User.findByIdAndUpdate(req.userFromAuth._id, {$addToSet: { friends: req.params.id }}, {new: true});
    if (!user1AfterFriendship) {
      return res.status(404).send();
    }

    const user2AfterFriendship = await User.findByIdAndUpdate(req.params.id, {$addToSet: { friends: req.userFromAuth._id }}, {new: true});
    if (!user2AfterFriendship) {
      return res.status(500).send();
    }

    res.send({ user1AfterFriendship, user2AfterFriendship });
  } catch (e) {
    console.log(e);
    return res.status(500).send();
  }
});

module.exports = router;