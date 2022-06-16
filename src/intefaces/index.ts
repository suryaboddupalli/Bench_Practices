import Hapi from "@hapi/hapi";

export interface registerData extends Hapi.Request {
    payload: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        conformPassword: string;
    };
}
export interface loginData extends Hapi.Request {
    payload: {
        email: string;
        password: string;
    };
}

export interface RefreshToken extends Hapi.Request {
    payload: {
        refreshToken: string;
    };
}

export interface tokenInterface {
    id: number;
    iat: number;
    exp: number;
}

export interface userData {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
}

export interface loginResponse {
    access: string;
    refresh: string;
    message: string;
    data: userData;
}
