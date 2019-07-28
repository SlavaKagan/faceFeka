const mongoose = require('mongoose');

const { Comments } = require('../utils/enums').APICollectionsModelsEnum;
const commentModelName = Comments.modelName;

const schemaOptions = {
  timestamps: true
};

const CommentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId
  },
  author: {
    type: mongoose.Schema.Types.ObjectId
  },
  content: {
    type: String,
    required: true
  }
}, schemaOptions);

const CommentModel = mongoose.model(commentModelName, CommentSchema);

module.exports = CommentModel;