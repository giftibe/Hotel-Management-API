const express = require('express');
const app = express();
const  router = require('express').Router()
const bookRouter = require('./room.router')

app.use('/v1', bookRouter)
module.exports = router;