var mysql = require("mysql");
var connection; 


if(process.env.JAWSDB_URL) {
  console.log("SUCCESS"); 
  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  console.log("ERROR!")
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database:  "burgers_DB"
    
  }); 
};

connection.connect(function(err){
    if (err) throw err
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection; 