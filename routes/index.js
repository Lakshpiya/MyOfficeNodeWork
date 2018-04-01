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
  
  if(emailId.toLowerCase()=="rahul.gupta@dnata.com" && pwd=="786786" )
  {
    res.render('loggedInUser', { title: 'Laksh Office Work',layout:'loggedInlayout.hbs',loggedInuser:'Rahul'});
  }
  else{
     res.render('error', { title: 'Laksh Office Work',errorMsg:'Invalid UserId and Password.'});
  }
});


router.get('/fevlist', function (req, res, next) {
  res.render('fevList', { layout:'loggedInlayout.hbs',title: 'Laksh Office Work',loggedInuser:'Rahul' });
});

router.post('/fevlist', function(req, res, next) {
  console.log(req.body.hdnFI); 
  var fevItemList=req.body.hdnFI;//"$Ameritz Indian Karaoke#624354490$Karaoke#624354480";
  if(fevItemList !="undefine" && fevItemList.length > 0)
    {
      var fevItemArraylist=fevItemList.split("$");      
      var Objvalue=[];
      fevItemArraylist.forEach(function(value){
        if(value.length>0)
          {
            console.log(value);
            Objvalue1 = {
                       artistName: value.split("#")[0],
                       artistId: value.split("#")[1]
                     };                     
                     Objvalue.push(Objvalue1);
          }
      });
    }    
    //var test1=JSON.stringify(Objvalue); Testing only       
    res.render('fevList',{layout:'loggedInlayout.hbs',test:Objvalue,loggedInuser:'Rahul'});
    
});

router.post('/getfevItem', function(req, res, next) { 
  console.log(req.body.hdnFTI) ;
  var test1= JSON.parse(req.body.hdnFTI);  
  var Objvalue=[];
  if(test1 !=null && test1 !="undefine" &&   test1.length > 0)
    {
       test1.forEach(function(value){
         console.log(value.val); 
         if(value.val.length>0)
          {
            console.log(value.val);
            Objvalue1 = {
                       artistName: value.val.split("#")[0],
                       artistId: value.val.split("#")[1]
                     };                     
                     Objvalue.push(Objvalue1);
          }        
       });
       res.render('fevList',{layout:'loggedInlayout.hbs',test:Objvalue,loggedInuser:'Rahul'});            
    }     
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
    , limit: 20    
    };
    
    
  itunes.search(options, function(err, response) {
    if (err) {
      console.log(err);
    } else { 
      console.log(response);
      
      res.render('loggedInUser',{layout:'loggedInlayout.hbs',test:response.results,loggedInuser:'Rahul'});
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
