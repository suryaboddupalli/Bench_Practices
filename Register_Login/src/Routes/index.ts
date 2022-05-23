import { RegisterController } from '../Controllers/RegisterController'
import { DataFetchController } from '../Controllers/DataFetchController'
import { LoginController } from '../Controllers/LoginController'
import { refreshController } from '../Controllers/RefreshController'

module.exports = [{
    method: 'GET',
    path: '/',
    handler: DataFetchController
}, {
    method: 'POST',
    path: '/register',
    handler: RegisterController
},
{
    method: 'POST',
    path: '/login',
    handler: LoginController
}, {
    method: 'POST',
    path: '/refresh-token',
    handler: refreshController
}]