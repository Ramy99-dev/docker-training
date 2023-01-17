require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.get('/',(req,res)=>{
    res.send("Hello World")
})

mongoose.connect("mongodb://database:27017/", { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('Connected to Database')
        app.listen(process.env.PORT,()=>{
            console.log("Listening on port 82")
        })
    })
    .catch((err)=>{
        console.log(err)
    });
