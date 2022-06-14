import Hapi from '@hapi/hapi'
import { routes } from './routes/index'

export const server: Hapi.Server = Hapi.server({
    port: 4000,
    host: 'localhost'
})

const init = async () => {
    await server.start()
        .then((res: any) => {
            console.log("connected")
        }).catch((err: any) => {
            console.log(err)
        })

    server.route(routes)
}
init()
