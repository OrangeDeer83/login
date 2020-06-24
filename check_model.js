var mysql = require("mysql");

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "user"
})

connection.connect((err)=>{
	if(err){
		console.log("error when connected to mysql.");
	}
	else{
		console.log("connect success!");
	}
})

module.exports = function check(id, pw){
	console.log(id);
	return new Promise((resolve, reject)=>{
		connection.query("SELECT * FROM user WHERE username='" + id + "' AND password='" + pw + "'", function(err, rows){
			if(err){
				console.log(err);
				reject("sql instruction issue!");
				return;
			}
			else{
				console.log(rows.get("username"));
				if (rows == "[]") {
					reject();
				}
				else {
					resolve();
				}
				return;
			}
		})
	})
}