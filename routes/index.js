var express = require('express');
var router = express.Router();
var session = require('express-session');
var itunes = require('../lib/itunes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Laksh Office Work' });
});


router.get('/login', function (req, res, next) {  
  res.render('index', { title: 'Laksh Office Work' });
});

router.get('/about', function (req, res, next) {  
  res.render('aboutus');
});


router.post('/login', function(req, res, next) {
  
  var emailId=req.body.username;
  var pwd=req.body.password;  
  
  if(emailId=="rahul.gupta@dnata.com" && pwd=="786786" )
  {
    res.render('loggedInUser', { title: 'Laksh Office Work',layout:'loggedInlayout.hbs',loggedInuser:'Laksh'});
  }
  else{
     res.render('error', { title: 'Laksh Office Work',layout:'layout.hbs',errorMsg:'Invalid UserId and Password.'});
  }
});


router.get('/fevlist', function (req, res, next) { 
    
  res.render('fevList', { layout:'loggedInlayout.hbs',title: 'Laksh Office Work' });
});

router.post('/fevlist', function(req, res, next) {
  console.log(req.body.hdnFI); 
});

/*about us page */
router.get('/loggedInUser',function(req, res, next){
  res.render('loggedInUser', { title: 'Laksh Office Work',layout:'loggedInlayout.hbs'});
});

router.post('/loggedInUser', function(req, res, next) {
  var options = {
    term: req.body.track
    , media: "music" // options are: podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all
    , entity: "musicTrack"
    , attribute: "songTerm"
    , limit: 10    
    };
    
    
  itunes.search(options, function(err, response) {
    if (err) {
      console.log(err);
    } else { 
      res.render('loggedInUser',{layout:'loggedInlayout.hbs',test:response.results});
    }  
  });
   
});

router.post('/contact', function(req, res, next) {
     console.log("Hi Rahul"+req.body.track);
     console.log("Hi Rahul Gupta"+req.body.hdnin);
     console.log("Hi Rahul Gupta"+req.body.hdnin);
     res.render('contactus');
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
