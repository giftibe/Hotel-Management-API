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
app.use(cors());
app.use(express.json())

// app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000;

app.use('/api', router)




app.listen(PORT, ()=>{
    database()
    console.log(`server started on port: ${PORT}`);
})
