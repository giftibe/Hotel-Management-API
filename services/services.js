const {RoomTypes,Room} = require('../Models/roomModel')
const mongoose = require('mongoose')

class HotelServices {
    //TO CREATE ROOM TYPE
    async createRoomType(name){
        console.log('at hotel services');
            return await RoomTypes.create(name)
    }

    //TO FETCH ALL ROOM TYPE
    async fetchAllRoomTypes(){
        return await RoomTypes.find({}); 
    }

    //TO CREATE ROOMS
    async createRoom(data){
            return await Room.create(data)
    }

     //TO FETCH ROOMS BY ID
    async fetchRoom(id){
        return await Room.find({_id: id})
    }

    //TO EDIT ROOMS
    async editRoom(id, type){
        return await Room.findOneAndUpdate({_id:id}, type, {
            new: true
        });
    }

    //TO DELETE ROOMS
    async deleteRoom(id){
        return await Room.findByIdAndDelete(({_id: id}))
    }
}

module.exports = new HotelServices()