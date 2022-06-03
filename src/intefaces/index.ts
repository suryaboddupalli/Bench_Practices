export interface registerData {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    conformPassword: string
}
export interface loginData {
    email: string,
    password: string,
}

export interface RefreshToken {
    refreshToken: string
}

export interface tokenInterface {
    id: number,
    iat: number,
    exp: number
}

export interface userInterface {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string
}