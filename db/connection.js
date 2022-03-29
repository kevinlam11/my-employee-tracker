const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employees_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("successfully connected");
});

module.exports = connection;
