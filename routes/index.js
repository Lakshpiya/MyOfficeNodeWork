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

router.post('/login', function(req, res, next) {
  console.log("HI Rahul UserName "+req.body.username);
  console.log("HI Rahul PAssword "+req.body.password);
  res.render('loggedInUser', { title: 'Laksh Office Work',layout:'loggedInlayout.hbs'});
});


/*about us page */
router.get('/loggedInUser',function(req, res, next){
  var options = {
    term: "LATA"
    , media: "music" // options are: podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all
    , entity: "musicTrack"
    , attribute: "songTerm"
    , limit: 20  
    };
    
    
  itunes.search(options, function(err, response) {
    if (err) {
      console.log(err);
    } else {      
      console.log(response.results);
      res.render('aboutus',{test:response.results});
    }  
  }); 

});

router.post('/loggedInUser', function(req, res, next) {
  var options = {
    term: req.body.track
    , media: "music" // options are: podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all
    , entity: "musicTrack"
    , attribute: "songTerm"
    , limit: 5    
    };
    
    
  itunes.search(options, function(err, response) {
    if (err) {
      console.log(err);
    } else {      
      console.log(response.results);
      res.render('aboutus',{test:response.results});
    }  
  });
   
});

router.post('/contact', function(req, res, next) {
     console.log("Hi Rahul"+req.body.track);
     console.log("Hi Rahul Gupta"+req.body.hdnin);
     console.log("Hi Rahul Gupta"+req.body.hdnin);
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
