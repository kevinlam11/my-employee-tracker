const connection = require("./connection");

class Store {
  constructor(connection) {
    this.connection = connection;
  }
  getAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }
  getAllRoles() {
    return this.connection.promise().query("SELECT * FROM role");
  }
  getAllEmployees() {
    return this.connection.promise().query("SELECT * FROM employee");
  }
}

module.exports = new Store(connection);
