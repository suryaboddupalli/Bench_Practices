import {GetData,postData} from './Controller'

module.exports =[{
    method:"Get",
    path:'/',
    handler:GetData,
    options:{
        description:"Get Data",
        notes:"Data Recivied",
        tags:['Api']
    }
},
{
    method:"post",
    path:'/add',
    handler:postData,
    options:{
        description:"Get Data",
        notes:"Data Recivied",
        tags:['Api']
    }
}]