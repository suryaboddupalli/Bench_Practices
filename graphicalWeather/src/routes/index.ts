import { controller } from '../controller/index'

export const routes = [{
    method: 'POST',
    path: '/zipcode',
    handler: controller.zipCode
},
{
    method: 'POST',
    path: '/square',
    handler: controller.square
}]