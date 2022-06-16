import Hapi from "@hapi/hapi";
import { soapClient } from "../soapClient";

const init = () => {
    return soapClient();
};

class soapController {
    async getZipcodeData(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        const client = await init();
        return await client.LatLonListZipCodeAsync(req.payload)
    }

    async getCityNames(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        const client = await init();
        return await client.LatLonListCityNamesAsync(req.payload)
    }
}

export const controller = new soapController();
