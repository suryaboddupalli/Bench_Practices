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

const args3 = {
    endPoint1Lat: 39.0,
    endPoint1Lon: -77.0,
    endPoint2Lat: 39.0,
    endPoint2Lon: -77.0
}
const args4 = {
    lowerLeftLatitude: 33.8835,
    lowerLeftLongitude: -80.0679,
    upperRightLatitude: 33.8835,
    upperRightLongitude: -80.0679,
    resolution: 20
}

const args5 = {
    latitude: 33.8835,
    longitude: -77.0,
    startDate: "2004-04-27",
    numDays: 7,
    unit: 'e',
    format: "12 hourly"

}

const args6 = {
    listLatLon: "38.99,-77.02 39.70,-104.80",
    startDate:"2004-04-27",
    numDays:7,
    unit:"e",
    format:"12 hourly"
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
    client.LatLonListLine(args3, function (err: any, result: any) {
        console.log(result);

    });
    client.LatLonListSubgrid(args4, function (err: any, result: any) {
        console.log(result);

    });
    client.NDFDgenByDay(args5, function (err: any, result: any) {
        console.log(result);

    });
    client.NDFDgenByDayLatLonList(args6, function (err: any, result: any) {
        console.log(result);

    });
});