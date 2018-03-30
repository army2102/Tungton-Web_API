var express = require('express');
var router = express.Router();

// TODO : find a way to get server ip address
<<<<<<< HEAD
// var serverAddress = 'http://150.95.26.138';
var serverAddress = 'http://localhost';
=======

>>>>>>> 51e720e1be7805e44cc646887c004aa49fa8b648
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});
router.get('/product', function (req, res, next) {
	res.render('product');
});
module.exports = router;
