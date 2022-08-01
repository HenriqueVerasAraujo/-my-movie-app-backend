const express = require('express');
const app = express();
app.use(express.json());
const UsersRouter = require('./routers/usersRouter');
const { passwordValid, emailValid, usernameValid } = require('./middleware/newUserbodyValid');

app.use('/users', usernameValid, emailValid, passwordValid, UsersRouter);

module.exports = app
