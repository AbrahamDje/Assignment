// name:KOFFI SERGE ABRAHAM DJE
//ID:301155720

const express = require("express");
const app = express();
//routes folder 
app.get("/",function(resq,res){
    res.send(<h1>Services</h1>);
});

app.get("/",function(resq,res){
    res.send(<h1>contact</h1>);
});


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');