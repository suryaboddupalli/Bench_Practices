export const getUserDataQuery = (id: number) => {
    const query = "exec getData @id='" + id + "'"
    return query
}

export const registerQuery = (userRegisterData: any, hashedPassword: any) => {
    const query = "exec registration @email='" + userRegisterData.email + "',@firstname='" + userRegisterData.firstname + "',@lastname='" + userRegisterData.lastname + "',@password='" + hashedPassword + "';"
    return query
}

export const loginQuery = (email: string) => {
    const query = "exec userlogin @email='" + email + "'"
    return query
}