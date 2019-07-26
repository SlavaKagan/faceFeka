const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { secret } = require('../utils/constants');
const { APICollectionsModelsEnum } = require('../utils/enums');
const { Users, Posts } = APICollectionsModelsEnum;
const userModelName = Users.modelName;
const postModelName = Posts.modelName;
const postCollectionNameDB = Posts.collectionNameDB;

const saltRounds = 8;

const schemaOptions = {
  timestamps: true
};

const UserSchema = new mongoose.Schema({
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  profilepic: {
    type: String,
    required: true
  },
  friends: [
    mongoose.Schema.Types.ObjectId
  ],
  token: {
    type: String
  }
}, schemaOptions);

UserSchema.virtual(postCollectionNameDB, {
  ref: postModelName,
  localField: '_id',
  foreignField: 'author'
});

UserSchema.methods.generateAuthToken = async function() {
  const _id = this._id.toString();
  const token = jwt.sign({ _id }, secret);

  this.token = token;
  await this.save();

  // this.cookie('token', token, { httpOnly: true }).sendStatus(200); // saw on tutorial, not sure if needed

  return token;
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await UserModel.findOne( { email } );
  if (!user) {
    throw new Error("User with this email doesn't exists.");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Wrong password entered for this user.');
  }

  return user;
};

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

const UserModel = mongoose.model(userModelName, UserSchema);

module.exports = UserModel;