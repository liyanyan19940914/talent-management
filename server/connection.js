const mysql = require('mysql');

let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '199409',
    database: 'users',
    port: 3306
});

db.connect(function (err) {
    if (err) {
        console.log("err" + err.stack);
        return;
    }
    console.log("connection id " + db.threadId);
});

module.exports = db;