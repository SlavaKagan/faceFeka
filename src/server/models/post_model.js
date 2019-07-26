const mongoose = require('mongoose');

const { APICollectionsModelsEnum } = require('../utils/enums');
const { Posts } = APICollectionsModelsEnum;
const postModelName = Posts.modelName;

const schemaOptions = {
  timestamps: true
};

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId
  },
  privacy: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  // attachments: {
  //   type: String
  // },
  stats: {
    likes: {
      type: Number,
      required: true
    },
    comments: {
      type: Number,
      required: true
    },
    shares: {
      type: Number,
      required: true
    }
  }
  // comments: {
  //   type: String,
  //   required: true
  // },
}, schemaOptions);

const PostModel = mongoose.model(postModelName, PostSchema);

module.exports = PostModel;