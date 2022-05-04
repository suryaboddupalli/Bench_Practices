
const SampleRegister = async (req, res) => {
    try {
        const Data = req.payload
        return await res.response(Data)
    } catch (err) {
       console.log(err)
    }
}

const RegisterData = {
    name:'register',
    register:function(server,options,next){
        server.route({
            method:'POST',
            path:'/datapost',
            handler:SampleRegister
        })
    }
}