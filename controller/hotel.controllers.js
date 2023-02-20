const {
    createRoomType,
    fetchAllRoomTypes,
    createRoom,
    fetchRoom,
    editRoom,
    deleteRoom,
    fetchAllUser } = require('../services/services')
const {MESSAGES} = require('../message/constants')

class HotelController{

    //create a room type
    async createRoomType(req, res){
        try{
            const reqBody = req.body

            // checking if the room type exist 
            const existingRoomType = await fetchAllRoomTypes()
            if(existingRoomType.name === reqBody.name){ res.status(403).json({
                success: false,
                message: 'Room type already exist'
            })}

            //if the room type doesn't exist, we create one
            const newRoomType = await createRoomType(req.body)
            res.status(201)
                .send({
                    message: MESSAGES.CREATED,
                    success: true,
                    newRoomType
                }); 
        }
        catch(err){
            res.status(500)
            .send({ message: err.message || MESSAGES.ERROR, success: false });
        }    
    }

    //fetch all room types
    async fetchRoomType(req, res) {
        try {
        const data = await fetchAllRoomTypes();
        res.status(200)
            .send({ message: MESSAGES.FETCHED, success: true, ROOM_TYPES: data });
        } catch (err) {
            res.status(500)
                .send({ message: err.message || MESSAGES.ERROR, success: false });
        }
    }

    //Creating rooms with room
    async createARoom(req, res){
        try {
        const data =  await (await createRoom(req.body)).populate("roomType")
        res.status(201)
            .send({ message: MESSAGES.CREATED, success: true, ROOMS:data });

        } catch (err) {
        res.status(500)
            .send({ message: err.message || MESSAGES.ERROR, success: false });
        }
    }

    //Delete Room
    async DeleteARoom(req, res){
        try{
        const {id} =req.params

        //check if room to delete exist
        const existingRoom = await fetchRoom(id)
        if(!existingRoom){
            res.status(500)
            .send({
                message: 'Room does not exit',
                success: false 
            });
        }

        await deleteRoom(id)
        res.status(201)
            .send({
                message: MESSAGES.DELETED,
                success: true,
            });   
        }    
        catch (err) {
            res.status(500)
            .send({ message: err.message || MESSAGES.ERROR, success: false });
        } 
    }
    

    //Fetch rooms
    async fetchARoom(req, res){
        try{
        const {id} = req.params

        //check if the room to fetch exists
        const existingRoom = await editRoom(id)
        if(!existingRoom){
            res.status(500)
            .send({
                message: 'Room does not exit',
                success: false 
            });
        }

        res.status(201)
            .send({
                message: MESSAGES.FETCHED,
                success: true,
                existingRoom
            }); 
        }
        catch (err) {
            res.status(500)
            .send({ message: err.message || MESSAGES.ERROR, success: false });
        }       
    }


    //Patch room
    async editRoom(req, res) {
        try{
        const {id} =req.params
        const updateData = req.body
        
        //check if the room to edit exist
        const existingRoom = await fetchRoom(id)
        if(!existingRoom){
            res.status(500)
            .send({
                message: 'Room to edit does not exit',
                success: false 
            });
        }

        //if room exists, edit it
        const change = await editRoom(id, updateData);
        res.status(200)
            .send({ message: MESSAGES.UPDATED, success: true, change});
        }    
        catch (err) {
            res.status(500)
            .send({ message: err.message || MESSAGES.ERROR, success: false });
        }
    }

        //fetch all users
        async fetchAllUser(req, res) {
            try {
                const data = await fetchAllUser();
                res.status(200)
                    .send({ message: MESSAGES.FETCHED, success: true, data });
                } catch (err) {
                    res.status(500)
                        .send({ message: err.message || MESSAGES.ERROR, success: false });
            }
    }
}

module.exports = new HotelController();