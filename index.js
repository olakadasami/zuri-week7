const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todoRoutes')

const { json } = require("express");

const app = express()
const PORT = 4000

// middlewares
app.use(json());

// Logger
app.use('*', (req, res, next) => {
    console.log(req.method)
    console.log(req.path)
    next()
})

// todo routes
app.use('/todo', todoRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})