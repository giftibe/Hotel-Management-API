const router = require('express').Router()
const { 
    createRoomType,
    createARoom, 
    fetchARoom,
    fetchRoomType,
    DeleteARoom,
    editRoom 
} = require('../controller/hotel.controllers')

router.post('/rooms-types', createRoomType)
router.get('/rooms-types', fetchRoomType)
router.post('/rooms', createARoom)
router.delete('/rooms/:id', DeleteARoom)
router.get('/rooms/:id', fetchARoom)
router.patch('/rooms/:id', editRoom)


module.exports = router