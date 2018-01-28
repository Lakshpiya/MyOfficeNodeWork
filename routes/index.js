var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Laksh Office Work' });
});


router.get('/login', function (req, res, next) {  
  res.render('index', { title: 'Laksh Office Work' });
});

/*about us page */
router.get('/about',function(req, res, next){
  res.render('aboutus');

});

/*Forget password page*/
router.get('/fbps',function(req, res, next){
  res.render('fp');
});

/*contactus page*/
router.get('/contact',function(req, res, next){
  res.render('contactus');
});


/*register page*/
router.get('/register',function(req, res, next){
  res.render('register');
});

module.exports = router;
