const mysql = require('mysql2');
require('dotenv').config();
const inquirer = require('inquirer');
const cTable = require('console.table');
const { info } = require('console');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});


async function init() {
  var mainMenu = await inquirer.prompt([{
    type: "list",
    name: "mainMenu",
    message: "What would you like to do?",
    choices: ["View all employees", "Add an employee", "Update existing employee role", "View all existing roles", "Add a role", "View all existing Departments", "Add a department"],
  }])
  for (const key in mainMenu) {
    if (Object.hasOwnProperty.call(mainMenu, key)) {
      if (!info[key]) {
        info[key] = mainMenu[key]
      }
    }
  }
  selection = info.mainMenu;
  menu(selection);
}
init();

function menu(mainMenu) {
  switch (mainMenu) {
    case 'View all employees':
      connection.query(
        'SELECT * FROM employee',
        function (err, results, fields) {
          console.table(results);
        }
      );
      break;
    case 'Add an employee':
      console.log('Add an employee');
      break;
    case 'Update existing employee role':
      console.log('Update existing employee role');
      break;
    case 'View all existing roles':
      connection.query(
        'SELECT * FROM roles',
        function (err, results, fields) {
          console.table(results);
        }
      );
      break;
    case 'Add a role':
      console.log('Add a role');
      break;
    case 'View all existing Departments':
      connection.query(
        'SELECT * FROM department',
        function (err, results, fields) {
          console.table(results);
        }
      );
      break;
    case `Add a department`:
      console.log('Add a department');
      break;
  }
}