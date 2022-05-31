import { registerSchema, loginSchema } from '../validationSchema/index'
import { controller } from '../controllers/userControllers'

export const routes = [{
    method: 'GET',
    path: '/',
    handler: controller.getUser
}, {
    method: 'POST',
    path: '/register',
    handler: controller.register,
    options: {
        validate: {
            payload: registerSchema
        }
    }
},
{
    method: 'POST',
    path: '/login',
    handler: controller.login,
    options: {
        validate: {
            payload: loginSchema
        }
    }
}, {
    method: 'POST',
    path: '/refresh-token',
    handler: controller.refreshRequest
}]