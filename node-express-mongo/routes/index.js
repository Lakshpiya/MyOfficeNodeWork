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

/*about us page */
router.get('/about',function(req, res, next){
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

router.post('/index', function(req, res, next) {
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
