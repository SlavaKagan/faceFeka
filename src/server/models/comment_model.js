const mongoose = require('mongoose');

const { APICollectionsModelsEnum } = require('../utils/enums');
const { Comments } = APICollectionsModelsEnum;
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