const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const UsersRouter = require('./routers/usersRouter');


app.use('/users', UsersRouter);

module.exports = app
