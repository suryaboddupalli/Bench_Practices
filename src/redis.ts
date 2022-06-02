const redis = require('ioredis')
import { config } from './convict/config'

const redisConfig = config.get('redis')

const nodes = redisConfig.server.ports.map((port: any) => {
    const nodes = {
        host: redisConfig.server.host,
        port: port
    }
    return nodes
})


export const cluster = new redis.Cluster(nodes);


