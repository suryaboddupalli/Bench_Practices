"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newconfig = void 0;
const convict = require('convict');
const De = require('./Data');
console.log(De.Data);
exports.newconfig = convict({
    env: {
        doc: 'environment',
        format: ['production', 'local', 'test'],
        default: 'local',
        env: 'NODE_ENV'
    },
    db: {
        server: {
            doc: "Database host",
            format: '*',
            default: 'localhost',
            env: "SERVER"
        },
        port: {
            doc: 'DB port',
            format: Number,
            default: 1433,
            env: "PORT"
        },
        database: {
            doc: "Database name",
            format: String,
            default: 'usersdb',
            env: "DB_NAME"
        },
        user: {
            doc: " username",
            format: String,
            default: 'sa',
            env: "USER"
        },
        password: {
            doc: "database password",
            format: 'String',
            default: "A",
            env: "PASSWORD"
        },
        driver: {
            doc: 'Driver',
            format: String,
            default: 'tedious'
        },
        options: {
            trustServerCertificate: {
                doc: "options",
                format: Boolean,
                default: true
            }
        }
    }
});
var env = exports.newconfig.get('env');
exports.newconfig.loadFile(`./src/Convict/${env}.json`);
// console.log(`./src/Convict/${env}.json`)
// console.log(`./${env}.json`)
exports.newconfig.validate({ allowed: 'strict' });
