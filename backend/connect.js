var mysql = require('mysql');

var config;
config = {
    mysql_pool : mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : '1010Will*_',
        database : 'reload'
    })
};
module.exports = config;