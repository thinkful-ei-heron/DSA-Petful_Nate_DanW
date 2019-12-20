/* eslint-disable strict */
const express = require('express');
const cors = require('cors');
const { CLIENT_ORIGIN } = require('./config.js');
const catsRouter = require('./cats/catsRouter');
const dogsRouter = require('./dogs/dogsRouter');
const usersRouter = require('./Users/usersRouter');

const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use('/api/dog', dogsRouter);
app.use('/api/cat', catsRouter);
app.use('/api/user', usersRouter);

// Catch-all 404
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(8080, () => {
  console.log('Serving on 8080');
});
