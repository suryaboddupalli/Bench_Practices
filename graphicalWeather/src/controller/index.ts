import Hapi from '@hapi/hapi'
import { globalWeather } from '../newClient'

class soapController {
    async getData(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        const data = await globalWeather.getSoapData(req.payload)
        return data
    }
}

export const controller = new soapController()