const express = require('express');
const catsRouter = express.Router();
const getCats = require('./catsData');

catsRouter.get('/', (req, res, next) => {
  let cats = getCats();
  return res.send(cats);
});

module.exports = catsRouter;
