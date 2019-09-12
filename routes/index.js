var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var csrf = require('csurf'); 


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');     
});

/* GET Sucessful Page. */
router.get('/sucessful', function(req, res, next) {
  res.render('indexSucessful');     
});


module.exports = router;


