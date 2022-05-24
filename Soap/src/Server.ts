import soap from 'soap'

var url = "http://www.dneonline.com/calculator.asmx?wsdl"
var args = { name: 'value' };

soap.createClientAsync(url).then((client) => {
    return client.MyFunctionAsync(args);
  }).then((result) => {
    console.log(result);
  });
// soap.createClient(url, function (err: any, client: any) {
//     client.MyFunction(args, function (err: any, result: any) {
//         console.log(result);
//     });
// });