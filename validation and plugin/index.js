const Hapi = require('@hapi/hapi')
const Joi = require('joi')
const { Schema ,loginSchema} = require('./Validations/UserSchema')
const BasicRoute = require('./Plugins/BasicRoutePlugin')

const server = new Hapi.Server({ port: 8000, host: 'localhost' })

const userRegister = async (req, res) => {
    try {
        const validation = await Schema.validate(req.payload, {
            abortEarly: false,
        });
        if (validation.error) {
            return res.response(validation.error.details).code(400)
        } else {
            return res.response(validation.value)
        }
    } catch (err) {
       console.log(err)
    }
}

const userLogin = async (req,res)=>{
    try{
        const loginvalidation= await loginSchema.validate(req.payload)
        if(loginvalidation.error){
            return res.response(loginvalidation.error.details).code(400)
        }else{
            return res.response(loginvalidation.value)
        }

    }catch (err){
        console.log(err)
    }
}

const init = async()=>{
server.route([
    {
        method: 'Post',
        path: '/register',
        handler: userRegister,
    },
    {
        method: 'Post',
        path: '/login',
        handler: userLogin,
    }
])

 await server.register([{
    plugin:require('./Plugins/BasicRoutePlugin'),
    options:{
       name:'getData'
    }
},
// {
//     plugin:require('./Plugins/PostDataPlugin'),
//     options:{
//         name:"registerData"
//     }
// }
])

server.start()
}

init()