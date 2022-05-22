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
            doc: "Database host",
            format: '*',
            default: 'ASPIRENAV567\\SQLEXPRESS',
            env: "SERVER"
        },
        port: {
            doc: 'DB port',
            format: "port",
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
        }
    },
});
// var env =newconfig.get('env')
// newconfig.loadFile(`./Convict/${env}.json`)
// console.log(`./${env}.json`)
// newconfig.validate({allowed:'strict'})
