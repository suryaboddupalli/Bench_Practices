var soap = require('soap');
var url = 'http://localhost:5000/wsdl?wsdl';
var args = { n1:4,n2:5};


soap.createClient(url, function (err: any, client: any) {
    client.add(args, function (err: any, result: any) {
        console.log(result);
    });
});