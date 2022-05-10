const redis = require('ioredis')

const client = new redis(6379,'localhost')

client.on('connect', () => {
    console.log("client connected to redis")
})

client.set('names',"surya")

client.get('names', (err, val) => {
    if (err) {
        console.log(err)
    }
    console.log(val)
})

async function main (){
    await client.set("firstname","surya")
    console.log(await client.get('firstname'))
 }
 main()

client.on('ready', () => {
    console.log("client connected to redis and ready to use")
})

client.on('error', (err) => {
    console.log("error" + err)
})
client.on('end', () => {
    console.log("client is disconnected")
})


