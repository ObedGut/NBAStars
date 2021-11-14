const mysql = require('mysql');

//Database Conection
var mysqlConnection = mysql.createConnection({
    host: 'bxgpumg5ivkv66ixbt22-mysql.services.clever-cloud.com',
    port: '3306',
    database: 'bxgpumg5ivkv66ixbt22',
    user: 'ur6sdavldyr8spyp',
    password: 'wFQbROKpoVo19Z4J0WNm',
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