const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
    port: '3306'
})
exports.select = function(callback) {
    connection.query('SELECT * from user', function(error, result, fields) {
        if (error) throw error;
        console.log(fields);
        for (let i = 0; i < result.length; i++) {
            console.log("username:" + result[i].username);
            console.log("password:" + result[i].password);
        };
        callback(result);

    });
}

connection.query('insert into user(username,password,email,phone) values("root","123456","","")', function(error, result, fields) {
    if (error) throw error;
    console.log(result);
    connection.end();
});