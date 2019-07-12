const express = require('express');
const http = require('http');

const app = express();

const client = __dirname + '/';
app.use('/', express.static(client));
const server = http.createServer(app);

server.listen(5000, () => {
  console.log('Starting the server on port 5000');
});