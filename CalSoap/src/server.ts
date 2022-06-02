var soap = require('soap');
const http = require('http');
const wsdl_path = "/wsdl";
const port = 5000
const WSSecurity = require('wssecurity-soap');

var myService = {
    Calculator: {
        CalculatorSoap: {
            Add: function (args: any, callback: any) {
                var n = args.a + args.b;
                callback(
                    { add: n }
                );
            },
            Subtract: function (args: any, callback: any) {
                var n = args.a - args.b;
                callback(
                    { add: n }
                );
            },
            Multiply: function (args: any, callback: any) {
                var n = args.a * args.b;
                callback(
                    { add: n }
                );
            },
            Divide: function (args: any, callback: any) {
                var n = args.a / args.b;
                callback(
                    { add: n }
                );
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


