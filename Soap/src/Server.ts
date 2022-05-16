import Hapi from '@hapi/hapi'
const Redis = require("ioredis");
const soap = require('soap');
require('dotenv').config()
const fs = require('fs')



const cluster = new Redis.Cluster([
  {
    port: 6380,
    host: "127.0.0.1",
  },
  {
    port: 6381,
    host: "127.0.0.1",
  },
]);



cluster.set("foo", "bar");
cluster.get("foo", (err:any, res:any) => {
    console.log(res)
});


const config = { port: process.env.port, host: process.env.host }
const server: Hapi.Server = Hapi.server(config)


var url = 'http://www.dneonline.com/calculator.asmx?wsdl';

// soap.createClient(url, function (err: any, client: any) {
//     client.firstSoap('naveen', function (err: any, res: any) {
//         console.log(res)
//     })
// });

// soap.createClientAsync(url).then((client:any) => {
//     return client.MyFunctionAsync(args);
//   }).then((result:any) => {
//     console.log(result);
//   });

var myService = {
    MyService: {
        MyPort: {
            MyFunction: ((args: any)=> {
                return {
                    name: args
                };
            })
        }
    }
};
// var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

const init = async () => {
    await server.start()
    // await soap.listen(server, '/wsdl', myService, xml, function () {
    //     console.log('server initialized');
    // });
}

init()