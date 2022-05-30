import { LoginController } from '../Controllers/UserControllers/LoginController'
import { RegisterController } from '../Controllers/UserControllers/RegisterController'
import { RefreshController } from '../Controllers/UserControllers/RefreshController'
import { UserDataController } from '../Controllers/UserControllers/UserDataController'


export const Routes = [{
    method: 'GET',
    path: '/',
    handler: UserDataController
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
    handler: RefreshController
}]