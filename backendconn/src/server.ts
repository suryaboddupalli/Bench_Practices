import Hapi from '@hapi/hapi'
import sql, { VarChar } from 'mssql'
import { Config } from './config'
import { useraddSchema } from './Validation'


const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const pool = new sql.ConnectionPool(Config)

pool.on("error", function (err) {
    if (err) {
        console.log(err.message)
    }
    console.log("connected")
})

server.route([{
    method: 'get',
    path: '/',
    handler: async function data(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        try {
            const data = await (await pool.connect()).query('select * from person')
            const promise: any = new Promise((resolve, reject) => {
                if (data) {
                    resolve(data)
                    console.log(data)
                } else {
                    reject("error")
                }
            });
            return promise
        }
        catch (err) {
            console.log(err)
        }
    }
},
{
    method: 'post',
    path: '/add',
    handler: async function data(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        try {
            const person = req.payload
            await useraddSchema.validateAsync(person)
                .then((res) => {
                    console.log(res)
                    const name: string = res.name
                    const email: any = res.email
                    const dob: Date = res.dob
                   const add = pool.request()
                   .input('name',VarChar(30),name)
                   .input('email',VarChar(30),email)
                   .input('dataofbirth',dob)
                   .execute('addperson')
                  console.log(add)
                }).catch((err: any) => {
                    console.log(err)
                })
        }
        catch (err) {
            console.log(err)
        }
    }
}
])

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();