"use strict";
var soap = require('soap');
var url = 'http://localhost:5000/wsdl?wsdl';
var args = { a: 4, b: 5 };
soap.createClient(url, function (err, client) {
    console.log(client);
    client.add(args, function (err, result) {
        console.log('err' + err);
        console.log('res' + result);
    });
});
