//Add required modules
var fs = require("fs");
var startPath = "container.html";
var xmlp = require('xml2js');
var requestHandler = require("./requestHandler.js");


//route to requested page and handle data if necessary
function route(pathname, response, data, handle){
    
    pathname = pathFix(pathname);
	console.log("routing request for " + pathname + " yo");
	if (data){
	    console.log("json data for request: " + JSON.stringify(data) + " yo");
	    console.dir("xml data for request: " + data + " yo");
	}
	
	if (typeof handle[pathname] === 'function'){
	    
	    handle[pathname](response, data);
	
	}
	
	else {
	    
	    //no data posted, respond with the requested URL
	    handle["url"](pathname, response);    
	}

}



var pathFix = function(pathName){
    console.log("fixing pathname");
    //remove the '/' token from the start of the pathname
    pathName = pathName.substring(1, pathName.length);
    //No URL specified - route to homepage
    if (pathName === ""){
        pathName = startPath;
    }
    //if it's a request for an HTML file, route to HTML folder
    if ((requestHandler.getURLType(pathName) == "html") && !checkForSubfolders(pathName)){
        pathName = "HTML/" + pathName;
    }
    return pathName;
};



var checkForSubfolders = function(pathName){

    var arr = pathName.split("/");
    if (arr.length > 1){
        return true;
    }
    else {
        return false;
    }

};


exports.route = route;