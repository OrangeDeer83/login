const check_model = require("../models/check_model.js");

module.exports = class login{
	check_correct(req, res){
			var id = req.body.id;
	        var pw = req.body.pw;
	        check_model(id, pw).then(result=>{
			res.json({
				r: 0,
				m: "success"
			})
		},(err)=>{
			res.json({
				r: 1,
				m: "failure"
			})
		})
	}
}
