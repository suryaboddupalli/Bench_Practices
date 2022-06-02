const redis = require('ioredis')
import { config } from './convict/config'

const redisConfig = config.get('redis')

const nodes = redisConfig.server.ports.map((port: any) => {
    console.log(port)
    const nodes = {
        host: redisConfig.server.host,
        port: port
    }
    return nodes
})

console.log(nodes)



export const cluster = new redis.Cluster(nodes);


