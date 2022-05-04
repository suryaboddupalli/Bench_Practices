const getData = async (req, res) => {
    try {
       const name = req.params.name
    //    return console.log("hello",name)
       return await res.response(`hello${name}`)
    } catch (err) {
       console.log(err)
    }
}

const BasicRoute = {
    name:"sample",
    register: function (server,options,next){
        server.route({
            method:'GET',
            path:'/{name}',
            handler:getData
        })
    }
}



module.exports = BasicRoute