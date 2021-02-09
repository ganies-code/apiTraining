const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const users = require('./routes');
dotenv.config();
app.use(bodyparser.json());
app.use(cors());
//
app.use('/users',users);
app.listen(process.env.PORT,console.log("server started listening on port 3000"))
