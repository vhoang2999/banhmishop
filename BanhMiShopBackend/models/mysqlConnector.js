// Load module
var mysql = require("mysql");
// Initialize pool
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "banhmishop",
  debug: false,
});
module.exports = pool;