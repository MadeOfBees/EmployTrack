const mysql = require('mysql2');
require('dotenv').config();
const cTable = require('console.table');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user:  process.env.DB_USER,
  database: process.env.DB_NAME,
  password:  process.env.DB_PASSWORD,
});

// simple query
connection.query(
  'SELECT * FROM department',
  function(err, results, fields) {
    console.table(results);
    // console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  }
);