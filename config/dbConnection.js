const mysql = require('mysql');
require('dotenv/config');

/**
 * Configuring the database
 */
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});


/**
 * Connecting to the database
 */
db.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database!");
});

module.exports = db;