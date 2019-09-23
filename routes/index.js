var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var csrf = require('csurf'); 
var csrfProtection = csrf();
var passport = require('passport');


var Product = require('../models/product');
var Data = require('../models/data');
var DataCart = require('../models/dataCart');

var jsonParser = bodyParser.json();

// router.use(csrfProtection);


/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find( function(err,docs){
    var productChunks = [];
    var chunkSize = 3 ;
    for(var i = 0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize));
        res.render('indexProducts', { products: docs });
    }    
  });     
});



module.exports = router;


