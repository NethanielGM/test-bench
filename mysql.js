require('dotenv').config()
const fs = require('fs');
const mysql = require('mysql');
const connection = mysql.createConnection({
    database: process.env.DATABASE,
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT
});
connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});
connection.end();