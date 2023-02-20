const express = require('express')
const router = express.Router()
const validateRoomJoi = require('../user.Middleware.OAuth/joi')
const verifyToken = require('../user.Middleware.OAuth/jwt')
const { createRoomType, createARoom, fetchARoom, fetchRoomType, DeleteARoom, editRoom, fetchAllUser } = require ('../controller/hotel.controllers')
const { signupUser, loginUser } = require('../user.Middleware.OAuth/user')


//signup/create user
router.post('/signup', signupUser)

//logIn user
router.post('/login', loginUser)

//to fetch all users
router.get('/users', verifyToken, fetchAllUser)

//room and roomtype functionalities
router.post('/room-types', verifyToken, createRoomType)
router.get('/room-types', fetchRoomType)
router.post('/rooms',validateRoomJoi, verifyToken,createARoom)
router.delete('/rooms/:id',verifyToken, DeleteARoom)
router.get('/rooms/:id', fetchARoom)
router.patch('/rooms/:id',validateRoomJoi, verifyToken, editRoom)

module.exports = router