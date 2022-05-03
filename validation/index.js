const Hapi= require('@hapi/hapi')
const Joi = require('joi')

const server =new Hapi.Server({port:8000,host:'localhost'})

const registerSchema = Joi.object({
    firstname: Joi.string().min(3).max(40),
    lastname: Joi.string().min(1).max(40),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).max(40).required(),
    cnfPassword:Joi.valid(Joi.ref(password)).required()
});

server.route([
    {
        method: 'GET',
        path: '/{name}',
        handler: function (request, h) {
            return `Hello ${request.params.name}`;
        },
        options: {
            validate: {
                params: Joi.object({
                    name: Joi.string().min(3).max(10)
                })
            }
        }
    },{
        method: 'POST',
        path: '/login',
        handler: function (request, h) {
    
            return 'login successfull';
        },
        options: {
            validate: {
                payload: Joi.object({
                    username: Joi.string().min(3).max(100),
                    password: Joi.string().min(8).max(100)
                })
            }
        }
    },
     {
        method: 'Post',
        path: '/register',
        handler: function (request, h) {
            const data = request.payload
            return console.log(data)
        },
        
        options: {
            response: {
                schema: Joi.array().items(registerSchema),
                failAction: 'log'
            }
        }
    }
   
])

server.start()