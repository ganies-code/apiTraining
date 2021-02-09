/*************************************************************
 *
 * Execution       : default node cmd> node server.js
 * Purpose         : Run a nodejs server and connect to a database server
 *
 * @description    : Creates a app using express ,and add two body-parser middlewares 
 *                   using express’s app.use() method. 
 *                   We run a nodejs server which listens on port number 3000. 
 *                   
 *
 * @file           : server.js
 * @overview       : Run a nodejs server and connect to a database server
 * @module         : User_Management
 * @version        : 1.0
 * @since          : 09/02/2021
 *
 * **********************************************************/

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const PORT = process.env.PORT;

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route to display message at the homepage
app.get('/', (res) => {
    res.json('Welcome to user management application');
});

// listen for requests
app.listen( PORT, () => {
    console.log( `Server is listening on port ${PORT}`);
});