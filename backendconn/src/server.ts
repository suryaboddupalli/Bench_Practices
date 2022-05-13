import Hapi from '@hapi/hapi'
import sql, { VarChar } from 'mssql'
import { Config } from './config'
import { useraddSchema } from './Validation'
import * as soap from 'soap';
import fs from 'fs'

function MyFunction(args:any) {
    return{name: args.name}
}


async function Soapclient() {
    var url = 'http://www.webservicex.com/globalweather.asmx?wsdl';
    var args = { name: 'value' };
    await soap.createClient(url, function (err: any, client) {
        client.MyFunction(args, function (err: any, result: any) {
            if (err) {
                console.log(err)
            }
            console.log(result);
        });
    });
}




Soapclient()

const server:Hapi.Server = Hapi.server({
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
            const person: any = req.payload
            const server = await pool.connect()
            // await useraddSchema.validateAsync(person).catch(err=>console.log('Validate'+err))
            const add = await server.request()
                .input('name', VarChar(30), person.name)
                .input('email', VarChar(30), person.email)
                .input('dataofbirth', person.dob)
                .execute('addperson')
            const promise: any = new Promise((resolve, reject) => {
                if (add) {
                    resolve("added successfull")
                    console.log(add)
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
    method: 'put',
    path: '/edit/{id}',
    handler: async function data(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        try {
            const id: any = req.params
            console.log(req.params)
            const person: any = req.payload
            const server = await pool.connect()
            const edit = await server.request()
                .input('id', parseInt(id))
                .input('name', VarChar(30), person.name)
                .input('email', VarChar(30), person.email)
                .input('dataofbirth', person.dob)
                .execute('editperson')
            const promise: any = new Promise((resolve, reject) => {
                if (edit) {
                    resolve("edited successfull")
                    console.log(edit)
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
}, {
    method: 'delete',
    path: '/delete/{id}',
    handler: async function data(req: Hapi.Request, res: Hapi.ResponseToolkit) {
        try {
            const id: any = req.params
            console.log(id.id)
            const server = await pool.connect()
            const deleteData = await server.request()
                .input('id', id.id)
                .execute('deleteperson')
            const promise: any = new Promise((resolve, reject) => {
                if (deleteData) {
                    resolve("Deleted successfull")
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
}
])
var xml = require('fs').readFileSync('myservice.wsdl', 'utf8')

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    soap.listen(server, "/wsdl", MyFunction, xml, function () {
        console.log("Soap client")
    })

};

init();