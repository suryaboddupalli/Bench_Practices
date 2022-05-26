const redis = require('ioredis')
import { newconfig } from './Config/Convict'
export const client: any = new redis(newconfig._instance.Redis.port, newconfig._instance.Redis.host)

client.on('connect', function () {
    console.log("redis server connected")
})
