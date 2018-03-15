var express = require('express');
var app = express();
var url = require('url');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/stamp', function(request, response) {
	handleStamp(request, response);
});

/*app.get('/', function(request, response) {
    response.render('pages/index')
});*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function handleStamp(request, response) {
	var requestUrl = url.parse(request.url, true);

	console.log("Query parameters: " + JSON.stringify(requestUrl.query));

	// TODO: Here we should check to make sure we have all the correct parameters

	var size = requestUrl.query.size;
	var item_weight = Number(requestUrl.query.item_weight);

	calculateRate(response, size, item_weight);
}

function calculateRate(response, size, weight) {
	sz = size.toLowerCase();

	var c = 0;
	var cost = c.toFixed(2);

	if (sz == "letters (stamped)") {
		if (weight < 1) {
			cost = 0.5;
		}
	} /*else if (op == "subtract") {
		result = left - right;		
	} else if (op == "multiply") {
		result = left * right;
	} else if (op == "divide") {
		result = left / right;
	}*/ else {
		// It would be best here to redirect to an "unknown operation"
		// error page or something similar.
	}

	// Set up a JSON object of the values we want to pass along to the EJS result page
	var params = {size: sz, weight: weight, cost: cost};

	// Render the response, using the EJS page "getRate.ejs" in the pages directory
	// Makes sure to pass it the parameters we need.
	response.render('pages/getRate', params);

}
