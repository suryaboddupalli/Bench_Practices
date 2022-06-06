var soap = require('soap')
const http = require('http');

const myService = {

};



const xml = require('fs').readFileSync('./src/graphical.wsdl', 'utf8');
const server = http.createServer(function (request: any, response: any) {
    response.end("404: Not Found: " + request.url);
});

server.listen(8000)
const wsdl_path = "/wsdl";
const port = 8000
soap.listen(server, '/wsdl', myService, xml, function () {
    console.log("connected to http://localhost:" + port + wsdl_path + "?wsdl");
});