const express = require('express');
const app = express();
let Users = require('../controller/users');
let users = new Users();
app.get('/:id',[users.getUser]);
app.put('/:id',[users.updateUser]);
//app.post('/register',[user.register]);
//app.post('/login',[user.login]);
module.exports = app;