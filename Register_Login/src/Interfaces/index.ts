export interface registerData {
    firstname: string,
    lastname: string,
    email: string,
    mobile: number,
    password: string,
    conformPassword: string
}

export interface loginData{
    email: string,
    password: string,
}

export interface ConfigData {
    user: string|undefined;
    password: string|undefined;
    server: string|undefined;
    database: string|undefined;
    port: number;
    options: {
        trustServerCertificate: boolean;
    };
}

export interface user{
    name:string,
    iat:number,
    exp:number
}

export interface RefreshToken {
    refreshToken: string
}