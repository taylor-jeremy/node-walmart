var express = require('express');
var app = express();
var url = require('url');

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
});
	}*/

	// Set up a JSON object of the values we want to pass along to the EJS result page
	var params = {size: sz, weight: weight, cost: cost};

	// Render the response, using the EJS page "getRate.ejs" in the pages directory
	// Makes sure to pass it the parameters we need.
	response.render('pages/getRate', params);

}

// get walking directions from central park to the empire state building
var http = require("http");
    url = "http://api.walmartlabs.com/v1/trends?format=json&apiKey=gz84agu8t2bvg5whfc48zbtk";

// get is a simple wrapper for request()
// which sets the http method to GET
/*var request = http.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event    
    var buffer = "", 
        data,
        item;

    response.on("data", function (chunk) {
        buffer += chunk;
    }); 

    response.on("end", function (err) {
        // finished transferring data
        // dump the raw data
        console.log(buffer);
        console.log("\n");
        data = JSON.parse(buffer);
        item = data.items[0];

        // extract the distance and time
        console.log("Item Id: " + item.itemId);
        console.log("Name: " + item.name);
    }); 
});*/

/*var items;
var optionsget = {
    host : 'api.walmartlabs.com', // here only the domain name
    path : '/v1/trends?format=json&apiKey=gz84agu8t2bvg5whfc48zbtk', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
var reqGet = http.get(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
       var chunks = [];
        res.on('data', function(data) {
            chunks.push(data);
        }).on('end', function() {
            var data   = Buffer.concat(chunks);
            items = JSON.parse(data);
            console.log(items);
            app.get('/view/index', function (request, response) {
        //console.log( data );
        response.render(_dirname+'/public/view/index',{'items' : items});
        });
        });

  });
        reqGet.end();
        reqGet.on('error', function(e) {
            console.error(e);
        });*/

/*app.get('/', function(req, res, next) {
  var items = request({
    uri: 'http://api.walmartlabs.com/v1/trends?format=json&apiKey=gz84agu8t2bvg5whfc48zbtk',
    qs: {
      api_key: '<key_here>'
    }
  })
  
  res.render('pages/index', {items});
  next()
});*/

/*app.get('http://api.walmartlabs.com/v1/trends?format=json&apiKey=gz84agu8t2bvg5whfc48zbtk', function(data){ var myinfo = data.results; });

app('results').html = data.results;

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}*/

(function($) {
$(function () {

    var status = $('#status');
    getData();

    function getData(){
        // Get the data from the Walmart API
        $.ajax({url: "http://api.walmartlabs.com/v1/trends?format=json&apiKey=gz84agu8t2bvg5whfc48zbtk",
                dataType: "jsonp",
                success: function(data) {
                    //Show this data in the console
                    console.log(data);
                    //variable instantiation
                    var itemId = data['items']['itemId'];
                    var name = data['items']['name'];
                    var regularPrice = data['items']['msrp'];
                    var salePrice = data['items']['salePrice'];

                    //Place data in HTML
                    $("#productId").html(itemId);
                    $("#name").html(name);
                    $("#regularPrice").html(regularPrice);
                    $("#salePrice").html(salePrice);
            }
        });

    }

    // A function for changing a string to TitleCase
    function toTitleCase(str){
        return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    // Change a string to TitleCase
    function toTitleCase(str){
        return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
});
});
