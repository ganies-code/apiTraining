const express = require('express');
const app = express();
let Users = require('../controller/users');
let users = new Users();
app.get('/:id',[users.getUsers]);
module.exports = app;