const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const UsersRouter = require('./routers/usersRouter');
const ReviewsRouter = require('./routers/reviewsRouter');
const CommentsRouter = require('./routers/commentsRouter');

app.use('/users', UsersRouter);
app.use('/reviews', ReviewsRouter);
app.use('/comments', CommentsRouter);

module.exports = app
