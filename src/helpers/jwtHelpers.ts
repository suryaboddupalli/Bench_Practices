import jwt from "jsonwebtoken";
import { config } from "../convict/config";
import { tokenInterface } from "../intefaces/index";

const jwtConfig = config.get("jwt");

export const accessToken = (userId: number) => {
    const payload = {
        id: userId,
    };
    const options = {
        expiresIn: jwtConfig.accessTokenExpires,
    };
    const token = jwt.sign(payload, jwtConfig.accessSecret, options);
    return token;
};

export const refreshToken = (userId: number) => {
    const payload = {
        id: userId,
    };
    const options = {
        expiresIn: jwtConfig.refreshTokenExpires,
    };
    const token = jwt.sign(payload, jwtConfig.refreshSecret, options);
    return token;
};

export const verifyRefreshToken = (refreshToken: string) => {
    const token = jwt.verify(refreshToken, jwtConfig.refreshSecret);
    return token as tokenInterface;
};

export const verifyAccessToken = (token: string) => {
    const payload = jwt.verify(token, jwtConfig.accessSecret);
    return payload as tokenInterface;
};
