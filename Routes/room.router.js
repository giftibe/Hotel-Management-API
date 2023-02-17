const router = require('express').Router()
const { 
    createRoomType,
    createARoom, 
    fetchARoom,
    fetchRoomType,
    DeleteARoom,
    editRoom 
} = require('../controller/hotel.controllers')

router.post('/api/v1/rooms-types', createRoomType)
router.get('/api/v1/rooms-types', fetchRoomType)
router.post('/api/v1/rooms', createARoom)
router.delete('/api/v1/rooms/:id', DeleteARoom)
router.get('/api/v1/rooms/:id', fetchARoom)
router.patch('/api/v1/rooms/:id', editRoom)


module.exports = router