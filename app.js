var express = require('express');
var app = express();

//config

app.use(express.static(__dirname + '/semantic'));

app.set('view engine', 'ejs');

//landing page
app.get('/', function(req, res){
	res.render('index');
});

//music page

app.get('/music', function(req, res){
	res.render('music');
});

//landing page

app.get('/coding', function(req, res){
	res.render('coding');
});

//landing page

app.listen(process.env.PORT || 3000);