const mongoose = require('mongoose');
const Schema = mongoose.Schema

// const userModel = new Schema({
//     name:{
//         type:String,
//         required:true,
//         unique:true,
//         trim:true
//     },
//     password
// })


const roomTypeSchema =  new Schema({

        name: {type: String, required: true,
            trim: true,
            unique: true
        }
})

const roomSchema =  new Schema({
            name:{
                type:String,
                required: true,
                trim: true
            },  

            roomType:{
                type: Schema.Types.ObjectId,
                ref: 'myroomtype',
                required: true
            },
            
            price: {
                type:Number,
                required: true
            },
        }
);

const RoomTypes = mongoose.model('myroomtype',  roomTypeSchema);
const Room = mongoose.model('room',  roomSchema);
module.exports = {RoomTypes,Room};