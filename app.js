var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ejs = require('ejs');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// routes
app.get('/', function(req, res){
	res.render('home');
});

// default route
app.get('*', function(req, res){
	res.send('you should not be here');
});

// listen
app.listen(PORT, function(){
	console.log('server is listening');
})