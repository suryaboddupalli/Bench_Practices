var soap = require('soap')
const url = 'http://localhost:8000/wsdl?wsdl';
const args = { zipCodeList: 12345 }
const subgrid = {
    lowerLeftLatitude: 33.8835,
    lowerLeftLongitude: 80.0679,
    upperRightLatitude: 33.8835,
    upperRightLongitude: 80.0679,
    resolution: 20
}
const args1 = {
    centerPointLat: 39.00,
    centerPointLon: -77.00,
    distanceLat: 50.0,
    distanceLon: 50.0,
    resolution: 20
}
const args2 = {
    displayLevel: 1
}


soap.createClient(url, function (err: any, client: any) {
    client.LatLonListZipCode(args, function (err: any, result: any) {
        console.log(result);
    });
    client.LatLonListSquare(args1, function (err: any, result: any) {
        console.log(result.listLatLonOut);

    });
    client.LatLonListCityNames(args2, function (err: any, result: any) {
        console.log(result.listLatLonOut);

    });
});