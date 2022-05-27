import {
    RegisterController,
    DataFetchController,
    LoginController,
    RefreshController
} from '../Controllers/UserControllers'

export const Routes = [{
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
    handler: RefreshController
}]