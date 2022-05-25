"use strict";
var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl';
var args = { CityName: "moscow", CountryName: "Russia" };
var args2 = { CountryName: "United Kingdom" };
soap.createClient(url, function (err, client) {
    client.GetWeather(args, function (err, result) {
        console.log(result);
    });
    client.GetCitiesByCountry(args2, function (err, result) {
        console.log(result);
    });
});
