var express = require('express')
  , multer = require('multer') 
  , bodyParser = require('body-parser')
  , http = require('http')
  , path = require('path')
  , indexController = require('./controller/index');

var app = express();

app.set('port', process.env.PORT || 3003);
app.set('views', __dirname + '/views');
app.set('images', __dirname + '/public/images');
app.set('partials', __dirname + '/views/partials');
app.set('view engine', 'ejs');

app.use(express.static(__dirname));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/fonts/', express.static(__dirname + '/node_modules/bootstrap/dist/fonts'));
app.use('/fonts/', express.static(__dirname + '/node_modules/font-awesome/fonts'));
app.use('/css/', express.static(__dirname + '/node_modules/font-awesome/css'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var router = express.Router();

router.route('/index').get( indexController.getIndex); // Get all customers


app.use('/', router);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
