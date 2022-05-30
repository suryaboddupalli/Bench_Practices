import {Users} from '../Controllers/UserController'


export const Routes = [{
    method: 'GET',
    path: '/',
    handler: Users.GetUser
}, {
    method: 'POST',
    path: '/register',
    handler: Users.Register
},
{
    method: 'POST',
    path: '/login',
    handler: Users.Login
}, {
    method: 'POST',
    path: '/refresh-token',
    handler: Users.Refresh
}]