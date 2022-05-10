import redis from 'ioredis'

export const client = new redis()

// async function main (){
//    await client.set("firstname","surya")
//    console.log(await client.get('firstname'))
// }
// main()

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

// client.on('SIGINT',()=>{
//     client.quit()
// })
