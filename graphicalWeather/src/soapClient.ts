var soap = require('soap')

class soapClient {
    async getSoapClient() {
        const promise: any = new Promise((resolve, reject) => {
            soap.createClient(__dirname+'/../'+'/src/graphical.wsdl', (err: any, client: any) => {
                resolve(client)
            })
        });
        return promise
    }
}

export const globalWeather = new soapClient()







