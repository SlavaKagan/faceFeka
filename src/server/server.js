const path = require('path');
const express = require(`express`);
require(`./db/mongoose`);
const userRouter = require(`./routers/user_router`);

const app = express();
const port = process.env.PORT || 5000;

const client = (path.join(__dirname, '../../'));
app.use(express.static(client));

app.use(express.json());

app.use(userRouter);
// app.use(someOtherRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});