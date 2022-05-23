import jwt from 'jsonwebtoken'
import { user } from '../Interfaces/index'
import { newconfig } from '../Config/Convict'

export const signAccessToken = (userId: string) => {
    return new Promise((resolve, reject) => {
        const payload = {
            name: userId
        }
        const options = {
            expiresIn: '10m'
        }
        jwt.sign(payload, newconfig._instance.Jwt.accessSecret, options, (err, val) => {
            if (err) reject(err)
            resolve(val)
        })
    })
}

export const refreshToken = (userId: string) => {
    return new Promise((resolve, reject) => {
        const payload = {
            name: userId
        }
        const options = {
            expiresIn: '1y'
        }
        jwt.sign(payload, newconfig._instance.Jwt.refreshSecret, options, (err, val) => {
            if (err) reject(err)
            resolve(val)
        })
    })
}

export const verifyRefreshToken = (refreshToken: any) => {
    return new Promise((resolve, reject) => {
        jwt.verify(refreshToken, newconfig._instance.Jwt.refreshSecret, (err: any, val: any) => {
            if (err) return resolve('err' + err)
            const userId: user = val
            resolve(userId.name)
        })
    })
}