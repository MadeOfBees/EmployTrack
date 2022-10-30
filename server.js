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

async function menu(mainMenu) {
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
      addEmp()
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
      addRole();
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
      addDept()
      break;
  }
}

async function addEmp() {
  var fiName = await inquirer.prompt([{
    name: 'fName',
    message: "Employee's first name",
    default: 'NULL'
  }])
  for (const key in fiName) {
    if (fiName.hasOwnProperty(key)) {
      var fName = fiName[key];
    }
  }
  var laName = await inquirer.prompt([{
    name: 'lName',
    message: "Employee's last name",
    default: 'NULL'
  }])
  for (const key in laName) {
    if (laName.hasOwnProperty(key)) {
      var lName = laName[key];
    }
  }
  var rid = await inquirer.prompt([{
    name: 'role_id',
    message: "Role ID?",
    default: 'NULL'
  }])
  for (const key in rid) {
    if (rid.hasOwnProperty(key)) {
      var role_id = rid[key];
    }
  }
  var mid = await inquirer.prompt([{
    name: 'manager_id',
    message: "manager ID?",
    default: 'NULL'
  }])
  for (const key in mid) {
    if (mid.hasOwnProperty(key)) {
      var manager_id = mid[key];
    }
  }
  connection.query(
    `INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("${fName}","${lName}","${role_id}","${manager_id}");`);
}

async function addRole() {
  var rName = await inquirer.prompt([{
    name: 'name',
    message: "Name of the roll you wish to add",
    default: 'NULL'
  }])
  for (const key in rName) {
    if (rName.hasOwnProperty(key)) {
      var name = rName[key];
    }
  }
  var sal = await inquirer.prompt([{
    name: 'salary',
    message: "Role's salary",
    default: 'NULL'
  }])
  for (const key in sal) {
    if (sal.hasOwnProperty(key)) {
      var salary = sal[key];
    }
  }
  var did = await inquirer.prompt([{
    name: 'departmentID',
    message: "department ID?",
    default: 'NULL'
  }])
  for (const key in did) {
    if (did.hasOwnProperty(key)) {
      var department_id = did[key];
    }
  }
  connection.query(
    `INSERT INTO role (title,salary,department_id) VALUES ("${name}","${salary}","${department_id}");`);
}
async function addDept() {
  var dName = await inquirer.prompt([{
    name: 'name',
    message: "Name of the department you wish to add",
    default: 'NULL'
  }])
  for (const key in dName) {
    if (dName.hasOwnProperty(key)) {
      var name = dName[key];
    }
  }
  connection.query(
    `INSERT INTO department (name) VALUES ("${name}");`);
}
