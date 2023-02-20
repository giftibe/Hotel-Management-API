const express = require('express');
const Joi = require('joi');


function validateRoomJoi(req,res, next) {
    const joiRoomSchema = Joi.object({
        name: Joi.string(),
        roomType:Joi.string(),
        price:Joi.number().integer()
    })

    const {error, value} = joiRoomSchema.validate(req.body)
    if(error){
            res.status(422)
                .send({
                    message: error,
                    success: false,
                });
    }
    else{
        next()
    }
}

module.exports = validateRoomJoi