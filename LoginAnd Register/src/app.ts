import Hapi from '@hapi/hapi'
import Config from "./Config"
import bunyan from 'bunyan'
import { register, login } from './Controllers/AuthController'
import dotenv from 'dotenv'
import Sql from 'mssql'

dotenv.config()

const conn = Sql.connect(Config)


export const log = bunyan.createLogger({ name: 'FirstTest' })

const server: Hapi.Server = new Hapi.Server({ port: process.env.PORT, host: process.env.host })


server.route([{
    method: 'POST',
    path: '/register',
    handler: register
},
{
    method: 'POST',
    path: '/login',
    handler: login
}, {
    method: 'get',
    path: '/get',
    handler: async (req: Hapi.Request, res: Hapi.ResponseToolkit) => {
        try {
            const data = (await conn).request()
                .query('select * from newstudents')
            console.log(data);
            res.response(data);
            (await conn).close()
        }
        catch (err) {
            console.log(err);
            (await conn).close()
        }
    }
}
])

server.start()
    .then(() =>
        console.log('connected' + process.env.PORT))
    .catch(err => {
        console.log(err)
    })

log.info("2st Stage")