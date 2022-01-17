export const ADD_DATA = 'ADD_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'
export const DELETE_DATA = 'DELETE_DATA'

export const addData =(data)=>{
    return{
        type :ADD_DATA,
        payload:data
    }
}

export const updateData =(data)=>{
    return{
        type :UPDATE_DATA,
        payload:data
    }
}

export const deleteData =(dataId)=>{
    return{
        type :DELETE_DATA,
        payload:dataId
    }
}