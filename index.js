require ('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./database/dbConnection')
const router = require('./routes/router')
const Server =  express()

Server.use(cors())
Server.use(express.json())
Server.use(router)


const PORT = 3000||process.env.PORT

Server.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})

Server.get('/',(req,res)=>{
    res.status(200).send("Server Started")
})