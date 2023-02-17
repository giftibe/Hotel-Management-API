//PACKAGES
const express = require('express');
const app = express();
const  router = require('./Routes/index.route')
require("dotenv").config();
const cors = require('cors');
const joi = require('joi')
const jwt = require('jsonwebtoken');


//IMPORTS
const database = require('./db');
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 3000;
app.use('/api', router)



app.listen(PORT, ()=>{
    database()
    console.log(`server started on port: ${PORT}`);
})






// // FOR CREATING ROOM TYPES
// app.post("/api/v1/rooms-types", async (req, res) => {
//     try {
//         const data = await Controller.createRoomType(req.body);
//         res.status(201)
//             .send({ message: MESSAGES.CREATED, success: true, data });
//     } catch (err) {
//         res.status(500)
//             .send({ message: err.message || MESSAGES.ERROR, success: false });
//     }
// });

// //FETCHING ALL ROOM TYPES
// app.get("/api/v1/rooms-types", async (req, res) => {
//     try {
//         const data = await Controller.fetchAllRoomTypes();
//         res.status(200)
//             .send({ message: MESSAGES.FETCHED, success: true, ROOM_TYPES: data });
//     } catch (err) {
//         res.status(500)
//             .send({ message: err.message || MESSAGES.ERROR, success: false });
//     }
// });

//FOR CREATING ROOMS
// app.post("/api/v1/rooms", async (req, res) => {
//     try {
//         const data = await (await Controller.createRoom(req.body)).populate("roomType");
//         res.status(201)
//             .send({ message: MESSAGES.CREATED, success: true, ROOMS:data });
//     } catch (err) {
//         res.status(500)
//             .send({ message: err.message || MESSAGES.ERROR, success: false });
//     }
// }); 

// DELETE ROOMS
// app.delete("/api/v1/rooms/:id", async (req, res) => {
//     try {
//         const data = await Controller.deleteRoom(req.params.id);
//         res.status(200)
//             .send({ message: MESSAGES.DELETED, success: true, data });
//     } catch (err) {
//         res.status(500)
//             .send({ message: err.message || MESSAGES.ERROR, success: false });
//     }
// });

// // FETCHING A ROOM BY ID
// app.get("/api/v1/rooms/:id", async (req, res) => {
//     try {
//         const data = await Controller.fetchRoom(req.params.id);


//         res.status(200)
//             .send({ message: MESSAGES.FETCHED, success: true, data });
//     } catch (err) {
//         res.status(500)
//             .send({ message: err.message || MESSAGES.ERROR, success: false });
//     }
// });;

// // PATCH ROOMS
// app.patch("/api/v1/rooms/:id", async (req, res) => {
//     try {
//         const {id} = req.params
//         const type = req.body

//         const change = await Controller.editRoom(id, type);
//         res.status(200)
//             .send({ message: MESSAGES.UPDATED, success: true, change});
//     } catch (err) {
//         res.status(500)
//             .send({ message: err.message || MESSAGES.ERROR, success: false });
//     }
// });
