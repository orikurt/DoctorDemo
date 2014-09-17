var fs = require("fs");

//HANDLERS
function deliverResource(pathname, response){
	fs.readFile(pathname, function(err, contents) {
		if(!err) {
            console.log("file found: " + pathname);
			response.setHeader("Content-Length", contents.length);
			response.setHeader("Content-Type", getURLType(pathname));
			response.statusCode = 200;
			response.end(contents);
		} else {
            console.log("cannot find file : " + pathname);
			response.writeHead(500);
			response.end();
		}
	});
};

function client(response, data){
	console.log("starting client handler");
	
}

function doctor(response, data){
	console.log("starting doctor handler");
}

function patient(response, data){
	console.log("starting patient handler");
}

function lebron(response, request){
	console.log("starting lebron handler");
	var lebron = fs.readFileSync("./Resources/lebron.jpg");
	response.writeHead(200, {"content type": "text/html"});
	response.write(lebron, "binary");
	response.end();
}

function handleErr(response){
	console.log("starting error handler");
	response.writeHead(404, {"content type": "text/plain"});
	response.write("404 not found");
	response.end();
}

function favicon(response, request){
	console.log("starting favicon handler");
	var fav = fs.readFileSync("./Resources/favicon.ico");
	response.writeHead(200, {"content type": "image/x-icon"});
	response.write(fav, "binary");
	response.end();	
}

function getURLType(pathName){
	var type = "";
    var pathSplit = pathName.split(".");
    if (pathSplit === 1) {
        // If no ending, output as plain text file
        type = "plain";
    } else {

        type = pathSplit[1]; // Returns the part after the "." separator
    }
    return type;
};

exports.client = client;
exports.doctor = doctor;
exports.patient = patient;
exports.handleErr = handleErr;
exports.lebron = lebron;
exports.favicon = favicon;
exports.deliverResource = deliverResource;
exports.getURLType = getURLType;