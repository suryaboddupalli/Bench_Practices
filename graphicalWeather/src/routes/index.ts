import { controller } from '../controller/index'

export const routes = [{
    method: 'POST',
    path: '/',
    handler: controller.getData,
}]