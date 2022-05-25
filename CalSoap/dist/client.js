"use strict";
var soap = require('soap');
var url = 'http://localhost:5000/wsdl?wsdl';
var args = { n1: 4, n2: 5 };
soap.createClient(url, function (err, client) {
    console.log(client.add);
    client.add(args, function (err, result) {
        console.log(result);
    });
});
