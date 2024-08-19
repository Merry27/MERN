require('dotenv').config()

const express = require('express')

const app = express()

app.get("/", (req, res)=>{
    res.json({mssg:'Welcome to the app'})
})

// listen port

app.listen(process.env.PORT,()=>{
    console.log("listening port 4000");
})

