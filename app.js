var express = require('express')
var exphbs  = require('express-handlebars');

var app = express();
var hbs = exphbs.create({defaultLayout: 'main'});

app.use(express.static('public'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res, next) {
  res.render("index");
})
 
app.listen(8080);