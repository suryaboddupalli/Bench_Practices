const redis = require('ioredis')
export const client: any = new redis(2001, 'localhost')

client.on('connect', function () {
    console.log("redis server connected")
})
