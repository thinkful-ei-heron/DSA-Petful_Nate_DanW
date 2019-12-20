const express = require('express');
const usersRouter = express.Router();
const getUsers = require('./usersData');

usersRouter.get('/', (req, res, next) => {
  let users = getUsers();
  return res.send(users);
});

module.exports = usersRouter;
