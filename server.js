//load MODULES
	
//module for handling HTTP requests
var http = require("http");
//module for parsing URLs of requests
var url = require("url");

var querystring = require("querystring");

//GLOBALS

var port = process.env.PORT;

// Main Function to run the server
function start(route, handle){
		
		// FUNCTION DEFS //
		
	function onRequest(request, response) {
		
		var data = "";
	  	//get the url requested
	  	var pathname = url.parse(request.url).pathname;
		console.log("request received for " + pathname + " yo");
		request.setEncoding("utf8");
		
		request.on("data", function(chunk){
			
			data += chunk;
			console.log("data chunk received: " + chunk);
		
		});
		
		request.on("end", function() {
			
			//parse the data to JSON
			var dataJSON = querystring.parse(data);
			
			//pass request to router 
		  	route(pathname, response, dataJSON, handle);
		    
		});
		
	  };
	
	//create the server and listen on the desired port
	http.createServer(onRequest).listen(port);
	console.log("server running on port " + port);
}
//export the start function to enable running the server remotely
exports.start = start;
