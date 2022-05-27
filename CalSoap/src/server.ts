var soap = require('soap');
var http = require('http');
var wsdl_path = "/wsdl";
var port = 5000

var myService = {
    services: {
        CalculatorService : {
            add: function (args: any, callback: any) {
                console.log(args)
                callback({
                    a: args.a,
                    b: args.b
                });
            }
        }
    }
}

var xml = require('fs').readFileSync('./src/cal.wsdl', 'utf8');
var server = http.createServer(function (request: any, response: any) {
    response.end("404: Not Found: " + request.url);
});

server.listen(port)

soap.listen(server, '/wsdl', myService, xml, function () {
    console.log("connected to http://localhost:" + port + wsdl_path + "?wsdl");
});


