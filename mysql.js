require('dotenv').config()
const mysql = require('mysql');
const connection = mysql.createConnection({
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
connection.query('USE panya_db2 SELECT * FROM panya_views WHERE insertTime >= now()-interval 3 month AND memberId > 0 ORDER BY insertTime DESC', (error, results, fields) => {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
connection.end();