var express = require('express');
var router = express.Router();

const check_api = require("../controllers/check_controller");

//const createRoomMethod = require("../controllers/createRoom_controller.js") 
c = new check_api();

/* GET users listing. */

router.post('/b', c.check_correct);

router.get('/a', function(req, res, next) {
  res.render('check', { 
  	
  	});
});

module.exports = router;