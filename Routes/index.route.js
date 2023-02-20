const express = require('express')
const app = express();
const bookRouter = require('./room.router')

module.exports = app.use('/v1', bookRouter);