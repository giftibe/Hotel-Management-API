const express = require('express')
const router = express.Router()
const app = express();
const bookRouter = require('./room.router')

// app.use('/v1', bookRouter)
// module.exports = router;

module.exports = app.use('/v1', bookRouter);