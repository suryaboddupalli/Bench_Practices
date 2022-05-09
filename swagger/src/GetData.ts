import Hapi from 'hapi'
import sql from 'mssql'
const config = {
    database: 'students',
    server: 'localhost',
    drivers: 'msnodesqlv8',
    encrypt: true,
    options: {
        trustedConnection: true
    }
}

const conn = sql.connect(config)

const GetStudents = async (request: Hapi.Request, res: Hapi.ResponseToolkit): Promise<void> => {
    try {
        const data = (await conn).request()
            .input('id', sql.Int, 100)
            .query('select * from student where id=@id')
        console.log(data);
        res.response(data);
        (await conn).close()
    }
    catch (err) {
        console.log(err);
        res.response("err");
        (await conn).close()
    }
}


const server: Hapi.Server = new Hapi.Server({ port: 8000, host: 'localhost' })



server.route({
    method: 'GET',
    path: '/',
    handler: GetStudents
})

server.start()
    .then(() =>
        console.log('connected'))
    .catch(err => {
        console.log(err)
    })