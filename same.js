var express = require('express')
var app = express()
var engines = require('consolidate');


app.use(express.static(__dirname));
app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', engines.mustache);
app.use(express.static(__dirname));

app.get('/', function(req,res){
	res.render('index.html');
})




app.listen(8000)