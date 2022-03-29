const inquirer = require("inquirer");
require("console.table");
const store = require("./db/store");
console.log("Welcome to My Employee Tracker!");
question1();

function question1() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "intro",
        message: "What would you like to do?",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Quit",
        ],
      },
    ])
    .then((results) => {
      switch (results.intro) {
        case "View all Departments":
          viewDepartments();
          break;
        case "View all Roles":
          viewRoles();
          break;
        case "View all Employees":
          viewEmployees();
          break;
        case "Quit":
          console.log("Goodbye");
          process.exit();
      }
    });
}

function viewDepartments() {
  store
    .getAllDepartments()
    .then(([results]) => {
      console.table(results);
    })
    .then(() => {
      question1();
    });
}
function viewRoles() {
  store
    .getAllRoles()
    .then(([results]) => {
      console.table(results);
    })
    .then(() => {
      question1();
    });
}
function viewEmployees() {
  store
    .getAllEmployees()
    .then(([results]) => {
      console.table(results);
    })
    .then(() => {
      question1();
    });
}

// add more questions
// add more answers
