//set up mysqul connection
var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "burgers_db"	
});
};

//make the connection
connection.connect(function(err){
	if(err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});



// //export connection for the ORM to use
module.exports = connection;