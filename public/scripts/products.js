"use strict";

var ERROR = {
  "message": "The request failed!"
};
$(function() {
    // Get the value from the search box
	//var searchString = $("#txtSearch").val();
	//console.log("Searching for: " + searchString);

	// Set up the parameters to send to the API
	//var params = {s: searchString, apikey:"fill_this_in_with_the_correct_key"};

	// Use jQuery to make the get request
		// For debugging purposes, make a note that we're back
		/*console.log("Back from server with the following results:");
		console.log(status);
    	console.log(data);*/
        var exform = $('#displayTrends'),
            output = $("#ulResults");
         
         exform.on('click', function(e) {
             e.preventDefault();
             var target = 'http://api.walmartlabs.com/v1/trends?format=json&apiKey=gz84agu8t2bvg5whfc48zbtk';
             
             $.get(target, function(response) {

    	output.append('<div>' + JSON.stringify(response) + '</div>');
	});
    .fail(function() {
      output.append('<div>' + JSON.stringify(ERROR) + '</div>');
    });
         });
     });

/*function updateResultList(data) {
	if (20 > 0) {
		var resultList = $("#ulResults");
		resultList.empty();

		for (var i = 0; i < 20; i++) {
			var name = data.Search[i].Name;
			resultList.append("<li><p>" + name + "</p></li>");
		}
	}
    
}*/