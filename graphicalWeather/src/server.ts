// var soap = require('soap')
// import http from 'http'
// const wsdl_path = "/wsdl";
// const port = 8000

// const myService = {

// };

// const xml = require('fs').readFileSync('./src/graphical.wsdl', 'utf8');
// const server = http.createServer(function (request: any, response: any) {
//     response.end("404: Not Found: " + request.url);
// });

// server.listen(port)

// const soapServer = soap.listen(server, '/wsdl', myService, xml, function () {
//     console.log("connected to http://localhost:" + port + wsdl_path + "?wsdl");
// });
// soapServer.authenticate = function (security: any) {
//     let created, nonce, password, user, token;
//     token = security.UsernameToken, user = token.Username,
//         password = token.Password, nonce = token.Nonce, created = token.Created;
//     return user === 'user' && password === soap.passwordDigest(nonce, created, 'password');
// };

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
