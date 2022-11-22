const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "panya-prod-aurora-pub-appvpc-cluster.cluster-cqtaobysrz0v.eu-west-1.rds.amazonaws.com",
    user: "root",
    password: "92f9jc1BfPK3wnYn",
    port: 3306
});
connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});
connection.query('SELECT * FROM panya_views WHERE insertTime >= now()-interval 3 month AND memberId > 0 ORDER BY insertTime DESC', (error, results, fields) => {
    if (error) throw error;
    console.log('The solution is: ', results);
});
connection.end();