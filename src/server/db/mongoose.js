const { connect } = require('mongoose');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'facefeka-db';

const mongooseDataBaseConnectionUrl = `${connectionUrl}/${databaseName}`;

connect(mongooseDataBaseConnectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});