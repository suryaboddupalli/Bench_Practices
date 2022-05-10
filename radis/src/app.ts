
import redis from 'ioredis'

export const client = new redis(6379,'localhost')

// client.set('name','surya')

client.on('connect',()=>{
    console.log("client connected to redis")
})


client.on('ready',()=>{
    console.log("client connected to redis and ready to use")
})

client.on('error',(err)=>{
    console.log("error"+err)
})
client.on('end',()=>{
    console.log("client is disconnected")
})



// client.set('name', 'surya');
// client.get('aneme', function(err, result) {
//     console.log(result);
// });

// client.get('name').then(function(result: any) {
//     console.log(result);
// });

// client.sadd('set', 1, 3, 5, 7);

