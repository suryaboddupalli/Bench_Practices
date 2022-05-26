"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newconfig = void 0;
const convict = require('convict');
exports.newconfig = convict({
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
            trustServerCertificate: {
                doc: 'options',
                format: Boolean,
                default: true
            }
        }
    },
    Redis: {
        port: {
            doc: 'redis_port',
            format: Number,
            default: 6379
        },
        host: {
            doc: 'redis_host',
            format: String,
            default: 'localhost'
        }
    },
    Jwt: {
        accessSecret: {
            doc: 'Secret_data',
            format: String,
            default: 'SECRET'
        },
        refreshSecret: {
            doc: ' Refresh_Secrect_data',
            format: String,
            default: 'SECRET'
        }
    },
    Hapi: {
        port: {
            doc: "Hapi Port",
            format: Number,
            default: 9000
        },
        host: {
            doc: "Hapi Host",
            format: String,
            default: 'localhost'
        }
    }
});
var env = exports.newconfig.get('env');
exports.newconfig.loadFile(`./src/Config/${env}.json`);
exports.newconfig.validate({ allowed: 'strict' });
