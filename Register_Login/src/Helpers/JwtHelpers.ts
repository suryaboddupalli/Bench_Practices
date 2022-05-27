import jwt from 'jsonwebtoken'
import { Config } from '../Config/Convict'

const JwtConfig = Config.get('Jwt')

export const signAccessToken = (userId: string) => {
    const payload = {
        name: userId
    }
    const options = {
        expiresIn: '10m'
    }
    const token = jwt.sign(payload, JwtConfig.accessSecret, options)
    return token
}

export const refreshToken = (userId: string) => {
    const payload = {
        name: userId
    }
    const options = {
        expiresIn: '1y'
    }
    const token = jwt.sign(payload, JwtConfig.refreshSecret, options)
    return token
}

export const verifyRefreshToken = (refreshToken: any) => {
    const token = jwt.verify(refreshToken, JwtConfig.refreshSecret)
    return token
}