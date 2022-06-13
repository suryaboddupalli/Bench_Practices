var soap = require('soap')
var options = {};

const xml = require('fs').readFileSync('./src/graphical.wsdl', 'utf8');
const client = soap.createClientAsync(xml, options)

class soapClient {
    async getSoapData(args: any) {
        client.LatLonListZipCode(args, function (err: any, result: any) {
            console.log(result);
            return result
        });
    }
}

export const globalWeather = new soapClient()





