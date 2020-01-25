  
var express = require('express');
var router = express.Router();
const {getAllPosts} = require("../../queries/posts")

router.get('/all', getAllPosts) 

router.get('/:user_id', (req, res) => {
  res.send('Sending all post from this user!');
});

router.post('/register', (req, res) => {
  res.send('Creating new post!');
});

module.exports = router;