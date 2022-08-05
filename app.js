const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const UsersRouter = require('./routers/usersRouter');
const ReviewsRouter = require('./routers/reviewsRouter');
const CommentsRouter = require('./routers/commentsRouter');
const LikesRouter = require('./routers/likesRouter');

app.use('/users', UsersRouter);
app.use('/reviews', ReviewsRouter);
app.use('/comments', CommentsRouter);
app.use('/likes', LikesRouter);

module.exports = app
