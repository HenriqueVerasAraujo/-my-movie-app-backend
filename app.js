const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const UsersRouter = require('./routers/usersRouter');
const ReviewsRouter = require('./routers/reviewsRouter');

app.use('/users', UsersRouter);
app.use('/reviews', ReviewsRouter);

module.exports = app
