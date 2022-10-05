const mysql = require('mysql');

// const client = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'test'
// });

// FreeSql server
// const client = mysql.createConnection({
//   host: 'sql6.freesqldatabase.com',
//   user: 'sql6516935',
//   password: 'H9XDBu5J2x',
//   database: 'student',
//   port: '3306',
// });

// client.connect((err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('Msql Connected')
// });

const { Client } = require('pg')
const client = new Client({
    host: 'ec2-44-206-137-96.compute-1.amazonaws.com',
    user: 'edbexklhitvvon',
    password: '50a7c390d20e43dbd4f09f400ad7c5b99ba313ff64b9fb8f9c6fd0f5ecb1649b',
    database: 'd2ubecfm5nrdq7',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
      }
  })
  client.connect()

module.exports = client;