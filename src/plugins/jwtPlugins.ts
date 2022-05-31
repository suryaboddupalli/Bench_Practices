import jwt from 'jsonwebtoken'
import { config } from '../convict/config'

const jwtConfig = config.get('jwt')

export const accessToken = (userId: string) => {
    const payload = {
        id: userId
    }
    const options = {
        expiresIn: jwtConfig.accessTokenExpires
    }
    const token = jwt.sign(payload, jwtConfig.accessSecret, options)
    return token
}

export const refreshToken = (userId: string) => {
    const payload = {
        id: userId
    }
    const options = {
        expiresIn: jwtConfig.refreshTokenExpires
    }
    const token = jwt.sign(payload, jwtConfig.refreshSecret, options)
    return token
}

export const verifyRefreshToken = (refreshToken: any) => {
    const token = jwt.verify(refreshToken, jwtConfig.refreshSecret)
    return token
}

export const verifyAccessToken = (token: string) => {
    const payload = jwt.verify(token, jwtConfig.accessSecret)
    return payload
}