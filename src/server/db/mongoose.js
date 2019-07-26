const { connect } = require('mongoose');

// ON CMD NOT BASH ==> "/Users/YOSSI SAADI\mongodb/bin/mongod.exe" --dbpath="/Users/YOSSI SAADI/mongodb-data"
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'facefeka-db';

const mongooseDataBaseConnectionUrl = `${connectionUrl}/${databaseName}`;

connect(mongooseDataBaseConnectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});