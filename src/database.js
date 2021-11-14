const mysql = require('mysql');

//Database Conection
var mysqlConnection = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    database: 'heroku_20030d5c5795d3f',
    user: 'b9c7feb71ada1d',
    password: '2b410ccb',
    multipleStatements: true
}); 

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Database is connected');
  }
});

module.exports = mysqlConnection;