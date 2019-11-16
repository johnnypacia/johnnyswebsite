var express = require('express');
var app = express();

//config

app.use(express.static(__dirname + '/semantic'));

app.set('view engine', 'ejs');

//landing page
app.get('/', function(req, res){
	res.render('index');
});

app.get('/music', function(req, res){
	res.render('music');
});
app.listen(process.env.PORT || 3000);