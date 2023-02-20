const jwt = require('jsonwebtoken')
const {MESSAGES} = require('../message/constants')

//function that verify's the token and goes to the next module/operation if successful
function verifyToken(req, res, next) {
    const bearHeader = req.headers['authorization']
    if(typeof bearHeader !== 'undefined'){
        const bearToken =  bearHeader.split(' ')[1]
        req.token = bearToken
        next()
    }else{
        res.status(403)
        .send({ message: err.message || MESSAGES.UNAUTHORIZED , success: false }); // Restricting access 
    }
};

module.exports = verifyToken
