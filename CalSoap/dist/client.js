"use strict";
var soap = require('soap');
var url = 'http://localhost:5000/wsdl?wsdl';
var args = { a: 4, b: 5 };
var options = {
    hasNonce: true,
    actor: 'actor'
};
var wsSecurity = new soap.WSSecurity('username', 'password', options);
soap.createClient(url, function (err, client) {
    console.log(client);
    client.setSecurity(wsSecurity);
    console.log(client.setSecurity(wsSecurity));
    console.log();
    client.Add(args, function (err, result) {
        console.log('err' + err);
        console.log('res' + result);
    });
    client.Subtract(args, function (err, result) {
        console.log('err' + err);
        console.log('res' + result);
    });
    client.Multiply(args, function (err, result) {
        console.log('err' + err);
        console.log('res' + result);
    });
    client.Divide(args, function (err, result) {
        console.log('err' + err);
        console.log('res' + result);
    });
});
