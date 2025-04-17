const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.router');


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', userRouter)

module.exports = app;