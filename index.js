var express = require('express');
var app = express();
var url = require('url');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
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

function handleId(request, response) {
	var requestUrl = url.parse(request.url, true);

	console.log("Query parameters: " + JSON.stringify(requestUrl.query));

	// TODO: Here we should check to make sure we have all the correct parameters

	/*var size = requestUrl.query.size;
	var item_weight = Number(requestUrl.query.item_weight);

	calculateRate(response, size, item_weight);
}

function calculateRate(response, size, weight) {
	sz = size.toLowerCase();

	var cost;

	if (sz == "letters (stamped)") {
		if (weight > 0 && weight < 3.5) {
			cost = Number(0.50 + (Math.trunc(weight) * 0.21)).toFixed(2);
		}
		else {
			console.log("Please enter a valid weight that is between 0 and 3.5 oz");
		}
	} else if (sz == "letters (metered)") {
		if (weight > 0 && weight < 3.5) {
			cost = Number(0.47 + (Math.trunc(weight) * 0.21)).toFixed(2);
		}
		else {
			console.log("Please enter a valid weight that is between 0 and 3.5 oz");
		}
	} else if (sz == "large envelopes (flats)") {
		if (weight > 0 && weight < 13) {
			cost = Number(1.00 + (Math.trunc(weight) * 0.21)).toFixed(2);
		}
		else {
			console.log("Please enter a valid weight that is between 0 and 13 oz");
		}
	} else if (sz == "first-class package service—retail") {
		if (weight > 0 && weight < 4) {
			cost = Number(3.50).toFixed(2);
		} else if (weight < 8) {
			cost = Number(3.75).toFixed(2);
		} else if (weight < 9) {
			cost = Number(4.10).toFixed(2);
		} else if (weight < 10) {
			cost = Number(4.45).toFixed(2);
		} else if (weight < 11) {
			cost = Number(4.80).toFixed(2);
		} else if (weight < 12) {
			cost = Number(5.15).toFixed(2);
		} else if (weight < 13) {
			cost = Number(5.50).toFixed(2);
		}
		else {
			console.log("Please enter a valid weight that is between 0 and 13 oz");
		}
	} else {
		// It would be best here to redirect to an "unknown operation"
		// error page or something similar.
		//The 404 Route
		app.get('*', function(req, res){
		response.send('invalid package type', 404);
});*/
	}

	// Set up a JSON object of the values we want to pass along to the EJS result page
	var params = {size: sz, weight: weight, cost: cost};

	// Render the response, using the EJS page "getRate.ejs" in the pages directory
	// Makes sure to pass it the parameters we need.
	response.render('pages/getRate', params);

}