var express = require('express');
var app = express();

//config

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//landing page
app.get('/', function(req, res){
	res.render('index');
});

app.listen(process.env.PORT || 3000);