const express = require('express');
const dogsRouter = express.Router();
const getDogs = require('./dogsData');

dogsRouter.get('/', (req, res, next) => {
  let dogs = getDogs();
  return res.send(dogs);
});

module.exports = dogsRouter;
