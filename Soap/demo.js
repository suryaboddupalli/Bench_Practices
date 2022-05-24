// const soap = require("soap")

// var url = "http://www.dneonline.com/calculator.asmx?wsdl"
// var args = { name: 'value' };

// const data = (args) => {
//     return {
//         name: args.name
//     };
// }

// soap.createClient(url, function (err, client) {
//     client.data(args, function (err, result) {
//         console.log(result);
//     });
// });

const soap = require('soap')
const wsdlUrl = 'http://www.dneonline.com/calculator.asmx?wsdl'


soap.createClientAsync(wsdlUrl, {overridePromiseSuffix: 'Promise'})
  .then(client => {
    client.GetDatabasesPromise({})
      .then(results => {
        const databases = results[0].GetDatabasesResult.string

        console.dir(databases)
      })
  })