import Hapi from '@hapi/hapi'
import { globalWeather } from '../soapClient'

class soapController {
    async zipCode(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        const client = await globalWeather.getSoapClient()
        const promise = new Promise((resolve, reject) => {
            client.LatLonListZipCode(req.payload, (err: any, result: any) => {
                resolve(result.listLatLonOut)
            });
        })
        return promise
    }

    async square(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        const client = await globalWeather.getSoapClient()
        const promise = new Promise((resolve, reject) => {
            client.LatLonListSquare(req.payload, (err: any, result: any) => {
                resolve(result.listLatLonOut)
            });
        })
        return promise
    }
}

export const controller = new soapController()