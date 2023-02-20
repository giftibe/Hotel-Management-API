const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcrypt')
const {Users} = require('../Models/roomModel')
const mongoose = require('mongoose')



const {MESSAGES} = require('../message/constants')

class User{

//signing up
async signupUser(req, res){
    try{
    const email = req.body.email

    const findAllUser = await Users.find({})
    if(findAllUser.email === email){ 
        res.status(500) .send({ message: MESSAGES.DUPLICATE, success: false });
    }

        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);


        await Users.create({
            email: req.body.email,
            password: hashedPassword,
            role:req.body.role})

            // This creates a token for only admin which they can use to perform other special requests.
            if(req.body.role === "admin"){
                jwt.sign({email: req.body.email, role:req.body.role}, process.env.SECRET_KEY, (error, token) =>{
                    res.json({
                        message: MESSAGES.REGISTERED, 
                        success: true,
                        token
                    })
                })
                }
            else{
                res.status(201)
                .json({
                        message: MESSAGES.REGISTERED,  
                        success: true,
                    }); 
            }
        }
    catch(err){
        res.status(500)
        .send({ message: err.message || MESSAGES.ERROR, success: false });
    }
}


//login user, validating email and using bcrypt to compare passwords 
    async loginUser(req, res){
        const {email} = req.body
        const {password} = req.body
        const checkUsers = await Users.findOne({})
        const sameMatch = await bcrypt.compare(password, checkUsers.password);

        if(checkUsers.email !== email){ 
            res.status(500)
            .json({ message: MESSAGES.REGISTER, success: false });
        }
        
        if(sameMatch && checkUsers.email === req.body.email)
            res.status(403)
            .json({
            success: true,
            message: MESSAGES.LOGIN,
            checkUsers})
    }
}
module.exports =  new User()