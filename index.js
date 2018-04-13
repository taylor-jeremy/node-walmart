var express = require('express');
var app = express();
//var url = require('url');
var url = 'http://api.walmartlabs.com/v1/trends?format=json&apiKey=gz84agu8t2bvg5whfc48zbtk';
var request = require('request');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/id', function(request, response) {
    handleId(request, response);
});

app.get('/', function(request, response) {
   response.render('pages/index')
});

app.listen(app.get('port'), function() {
 console.log('Node app is running on port', app.get('port'));
});