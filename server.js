const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todoRoutes')
const { json } = require("express");

const app = express()
const PORT = 4000

// connect to DB
const mongoDb = 'mongodb://0.0.0.0:27017/zuri'
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(mongoDb, connectionParams)
    .then(result => {
        //starting server
        app.listen(PORT);
        console.log('db is connected')
    }).catch(err => {
        console.log(err)
    })

// middlewares

app.use(json());

// Logger
app.use('*', (req, res, next) => {
    console.log("New request made")
    console.log(req.method)
    console.log(req.path)
    next()
})

// todo routes
app.use('/todo', todoRoutes)