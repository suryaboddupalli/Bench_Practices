var soap = require('soap');
var http = require('http');

var myService = {
    GlobalWeather: {
        GlobalWeatherSoap: {
            GetWeather: function (args: any, callback: any) {
                callback({
                    name1: args.CountryName,
                    name5: args.CityName
                });
            },
            GetCitiesByCountry: function (args: any, callback: any) {
                callback({
                    name2: args.CountryName
                });
            }
        },
        GlobalWeatherSoap12: {
            GetWeather: function (args: any, callback: any) {
                callback({
                    name3: args.CountryName,
                    name6: args.CityName
                });
            },
            GetCitiesByCountry: function (args: any, callback: any) {
                callback({
                    name4: args.CountryName
                });
            }
        }
    }
};



var xml = require('fs').readFileSync('./src/globalweather.wsdl', 'utf8');
var server = http.createServer(function (request: any, response: any) {
    response.end("404: Not Found: " + request.url);
});

server.listen(8000)
var wsdl_path = "/wsdl";
var port = 8000
soap.listen(server, '/wsdl', myService, xml, function () {
    console.log("connected to http://localhost:" + port + wsdl_path +"?wsdl");
});