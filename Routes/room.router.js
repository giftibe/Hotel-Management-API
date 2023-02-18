const express = require('express')
const router = express.Router()
const { createRoomType, createARoom, fetchARoom, fetchRoomType, DeleteARoom, editRoom } = require ('../controller/hotel.controllers')

router.post('/room-types', createRoomType)
router.get('/room-types', fetchRoomType)
router.post('/rooms', createARoom)
router.delete('/rooms/:id', DeleteARoom)
router.get('/rooms/:id', fetchARoom)
router.patch('/rooms/:id', editRoom)

module.exports = router