const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const usersRouter = require('./routes/posts/users/users.js');
const postsRouter = require('./routes/posts/posts.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', usersRouter);
app.use('/posts', postsRouter);







app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});