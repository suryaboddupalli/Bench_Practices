const convict = require('convict')

export const config = convict({
    env: {
        doc: 'environment',
        format: ['production', 'local', 'test'],
        default: 'local',
        env: 'NODE_ENV'
    },
    db: {
        server: {
            doc: 'Database host',
            format: '*',
            default: 'localhost',
            env: 'SERVER'
        },
        port: {
            doc: 'DB port',
            format: Number,
            default: 1433,
            env: 'PORT'
        },
        database: {
            doc: 'Database name',
            format: String,
            default: 'usersdb',
            env: 'DB_NAME'

        },
        user: {
            doc: ' username',
            format: String,
            default: 'sa',
            env: 'USER'
        },
        password: {
            doc: 'database password',
            format: 'String',
            default: 'A',
            env: 'PASSWORD'
        },
        driver: {
            doc: 'Driver',
            format: String,
            default: 'tedious'
        },
        options: {
            trustServerCertificate:
            {
                doc: 'options',
                format: Boolean,
                default: true
            }
        }
    },
    redis: {
        port1: {
            doc: 'redis_port',
            format: Number,
            default: 3000
        },port2: {
            doc: 'redis_port',
            format: Number,
            default: 3001
        },port3: {
            doc: 'redis_port',
            format: Number,
            default: 3002
        },port4: {
            doc: 'redis_port',
            format: Number,
            default: 3003
        },
        host: {
            doc: 'redis_host',
            format: String,
            default: 'localhost'
        }
    },
    jwt: {
        accessSecret: {
            doc: 'Secret_data',
            format: String,
            default: 'SECRET'
        },
        refreshSecret: {
            doc: ' Refresh_Secrect_data',
            format: String,
            default: 'SECRET'
        },
        accessTokenExpires: {
            doc: 'Access Token',
            format: String,
            default: '10m'
        },
        refreshTokenExpires: {
            doc: 'Refresh Token',
            format: String,
            default: '1y'
        }
    },
    hapi: {
        port: {
            doc: 'Hapi Port',
            format: Number,
            default: 9000
        },
        host: {
            doc: 'Hapi Host',
            format: String,
            default: 'localhost'
        }
    },
    bcrypt:{
        doc:'Bcrypt',
        format:Number,
        default:10
    }
});

var env = config.get('env')

config.loadFile(`./src/convict/${env}.json`)

config.validate({ allowed: 'strict' })
