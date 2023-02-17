const {RoomTypes,Room} = require('../Models/roomModel')
const mongoose = require('mongoose')

class controller{
    //TO CREATE ROOM TYPE
    async createRoomType(id){
            return await RoomTypes.create(id)
    }

    //TO FETCH ALL ROOM TYPE
    async fetchAllRoomTypes(){
        return await RoomTypes.find({}); 
    }

    //TO CREATE ROOMS
    async createRoom(id){
            return await Room.create(id)
    }

     //TO FETCH ROOMS BY ID
    async fetchRoom(id){
        return await Room.find({_id: id})
    }

    //TO EDIT ROOMS
    async editRoom(id, type){
        return await Room.findOneAndUpdate({_id:id}, {type: type});
    }

    //TO DELETE ROOMS
    async deleteRoom(id){
        return await Room.findByIdAndDelete(({_id: id}))
    }
}

module.exports = new controller()