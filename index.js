const express = require('express');
const app = express();
const bodyparser =require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const users = require('./routes');
const models = require('./models');


dotenv.config();
app.use(bodyparser.json());
app.use(cors());
//
app.use('/users',users);
models.sequelize.sync({
    //force: true,
    //logger: console.log()
}).then(
    function () {
        app.listen(process.env.PORT,() => console.log(`Server running on port 3000`));
    });

//app.listen(process.env.PORT,console.log(module.paths));
