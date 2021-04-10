var express = require("express")
var app = express()
var cor = require("cors")
var mongoose = require('mongoose')
var dotenv = require("dotenv")

dotenv.config()

mongoose.connect(process.env.DB_ACESS, () =>console.log("DB"))

app.listen(3000, () =>{
    console.log("Server is working!")
})
