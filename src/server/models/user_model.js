const { Schema, model } = require('mongoose');
const validator = require('validator');
const { InvalidEmail } = require('../constants');

const userModelName = 'User';

const checkValidEmail = (value) => {
  if (!validator.isEmail(value)) {
    throw new Error(InvalidEmail);
  }
};

const UserSchema = Schema({
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
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      // checkValidEmail(value); // check if it works also like this in short method
      if (!validator.isEmail(value)) {
        throw new Error(InvalidEmail);
      }
    }
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

const UserModel = model(userModelName, UserSchema);

module.exports = UserModel;