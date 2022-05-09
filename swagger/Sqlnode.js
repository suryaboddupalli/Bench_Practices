const sql = require('mssql')

const config = {
    database: 'students',
    server: 'localhost',
    drivers:'msnodesqlv8',
    options: {
        trustedConnection: true
    }
}

sql.on('error', err => {
    console.log(err.message)
})

//call back

async function getData() {
    try {
        sql.connect(config, (err) => {
            if (err) {
                console.log(err)
            }
            const result = await sql.query('select * from student')
            console.log(result)
        })
    }
    catch (err) {
        console.log(err)
    }
}

getData()


//pool async await

async function GetDetails() {
    try {
        let pool = await sql.connect(config)
        const res = await pool.request()
            .input('id', sql.int, 100)
            .query('select * from student where id=@id')
        console.log(res)
        sql.close();
        // store procudure
        const res = await pool.request()
            .execute('STD_NAMES')
        console.log(res)
        sql.close();
    }
    catch (err) {
        console.log(err)
        sql.close()
    }
}

GetDetails()

//promise

sql.connect(config)
.then(pool=>{
    return pool.request()
    .input('id', sql.int, 100)
    .query('select * from student where id=@id')
}).then(res=>{
    console.log(res)
    sql.close()
}).catch(err=>{
    console.log(err)
    sql.close()
})
