const redis = require('ioredis')
import { config } from './convict/config'

const redisConfig = config.get('redis')

const nodes = [
    {
        host: redisConfig.host,
        port: redisConfig.port1
    },
    {
        host: redisConfig.host,
        port: redisConfig.port2
    },
    {
        host: redisConfig.host,
        port: redisConfig.port3
    },
    {
        host: redisConfig.host,
        port: redisConfig.port4
    }
]


export const cluster = new redis.Cluster(nodes);


