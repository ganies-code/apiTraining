import express from 'express';
import mongoose from 'mongoose';


import MongoUrl from './keys.js'
import Router from './routes/auth.js'

// app config
const app = express()
const port = process.env.PORT || 9000


// db config
 mongoose.connect(MongoUrl ,{useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true})

 const conn = mongoose.connection

 conn.once('connected', (req,res) => {
     console.log("db is connected")
 })


// middlewares
app.use(express.json())


// routes
app.use(Router)


// listen
app.listen(port, console.log("Server is started"))