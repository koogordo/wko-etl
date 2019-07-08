const mysql = require('mysql');

exports.wko = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'GBP@ck3rs#1',
    database: 'wko'
});