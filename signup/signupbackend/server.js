var express = require("express")
var app = express()
var cor = require("cors")
var mongoose = require('mongoose')
var dotenv = require("dotenv")
var routeUrls = require('./router/route')

dotenv.config()

mongoose.connect("mongodb+srv://fhw9574:shelby@cluster0.tdjd2.mongodb.net/userTable?retryWrites=true&w=majority", () =>console.log("DB connected"))

app.use(express.json()) //body passer activated
app.use(cor())
app.use('/page', routeUrls)
app.listen(3000, () =>{
    console.log("Server is working!")
})
