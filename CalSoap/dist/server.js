"use strict";
var soap = require('soap');
var http = require('http');
var wsdl_path = "/wsdl";
var port = 5000;
var myService = {
    Calculator: {
        CalculatorHttpsSoap11Endpoint: {
            add: function (args, callback) {
                console.log(args);
                callback({
                    n1: args.n1,
                    n2: args.n2
                });
            }
        }
    }
};
var xml = require('fs').readFileSync('./src/cal.wsdl', 'utf8');
var server = http.createServer(function (request, response) {
    response.end("404: Not Found: " + request.url);
});
server.listen(port);
soap.listen(server, '/wsdl', myService, xml, function () {
    console.log("connected to http://localhost:" + port + wsdl_path + "?wsdl");
});
