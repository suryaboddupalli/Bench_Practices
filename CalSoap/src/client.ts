var soap = require('soap');
var url = 'http://localhost:5000/wsdl?wsdl';
var args = { a: 4, b: 5 };


soap.createClient(url, function (err: any, client: any) {
    console.log(client)
    client.add(args, function (err: any, result: any) {
        console.log('err'+err)
        console.log('res'+result);
    });
});