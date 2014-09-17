//add SERVER MODULE
var server = require("./server.js");
var router = require("./router.js");
var requestHandler = require("./requestHandler.js");

var handle = {};

setupHandler();

function setupHandler(){
    
    handle["url"] = requestHandler.deliverResource;
    
    handle["client"] = requestHandler.client;
    
    handle["doctor"] = requestHandler.doctor;
    
};

//run the server
server.start(router.route, handle);
