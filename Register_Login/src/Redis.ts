import redis from 'ioredis'
import { Config } from './Config/Convict'

const RedisConfig = Config.get('Redis')

export const client: any = new redis(RedisConfig.port, RedisConfig.host)

client.on('connect', function () {
    console.log("redis server connected")
})
