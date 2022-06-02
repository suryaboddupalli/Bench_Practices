import { controller } from '../controllers/userControllers'
import Hapi from '@hapi/hapi'

export const userDataPlugin = {
    name: "get-user",
    register: (server: Hapi.Server, options: any) => {
        server.route({
            method: 'Get',
            path: '/getData',
            handler: controller.getUser
        });
    }
}
