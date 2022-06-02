import { controller } from '../controllers/userControllers'
import Hapi from '@hapi/hapi'

export const refreshTokenPlugin = {
    name: "refresh-token",
    register: (server: Hapi.Server, options: any) => {
        server.route({
            method: 'POST',
            path: '/refresh-token',
            handler: controller.refreshRequest
        });
    }
}



