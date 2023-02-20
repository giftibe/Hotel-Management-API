const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required: true,
        trim:true
    },    
    role: {
        type: String,
        enum: ["guest", "admin"],
        required: [true, "Please specify user role"],
        trim:true
    },

})


const roomTypeSchema =  new Schema({

        name: {
            type: String, required: true,
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
const Users = mongoose.model('user',  userSchema);
module.exports = {RoomTypes,Room,Users};