var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
app.use(express.json());
var check = require("./routes/check");
app.use("/show", check);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.listen(3000, function(){
	console.log("已開啟");
});