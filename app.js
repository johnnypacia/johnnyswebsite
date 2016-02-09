var express = require('express');
var app = express();
var sass = require('node-sass');
sass.render({
  file: scss_filename,
  [, options..]
}, function(err, result) { /*...*/ });
// OR
var result = sass.renderSync({
  data: scss_content
  [, options..]
});

//config

app.use(express.static(__dirname + '/semantic'));

app.set('view engine', 'ejs');

//landing page
app.get('/', function(req, res){
	res.render('index');
});

app.listen(process.env.PORT || 3000);