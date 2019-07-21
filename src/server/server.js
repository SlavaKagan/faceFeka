const path = require('path');
const express = require(`express`);
require(`./db/mongoose`);

const userRouter = require(`./routers/user_router`);
const postRouter = require(`./routers/post_router`);

const app = express();
const port = process.env.port || 5000;

const client = (path.join(__dirname, '../../'));
app.use(express.static(client));

app.use(express.json());

app.use(userRouter);
app.use(postRouter);

app.get('*', (req, res) => {
  res.status(404).send({
    error: `404!#@#!!! Sorry, Unfortunately Facefeka doesn't have any page linked to address '${req.params[0]}'`
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});