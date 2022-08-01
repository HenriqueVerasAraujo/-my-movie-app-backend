const express = require('express');
const app = express();
app.use(express.json());
const UsersRouter = require('./routers/usersRouter');

app.use('/users', UsersRouter);

module.exports = app
