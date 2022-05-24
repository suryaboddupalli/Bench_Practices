import hapi from '@hapi/hapi'
import { verifyRefreshToken, signAccessToken, refreshToken } from '../Helpers/JwtHelpers'
import { RToken } from '../Interfaces/index'


export const refreshController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
    try {
        const Token = req.payload
        const promise = await new Promise(async (resolve, reject) => {
            if (!Token) return resolve('Token is not Valid')
            const userId = await verifyRefreshToken((Token as RToken).refreshToken)
            const access_Token = await signAccessToken(userId as string)
            const refresh_Token = await refreshToken(userId as string)
            console.log(access_Token + ' ' + refresh_Token)
            const tokens = res.response({ access_Token, refresh_Token, message: 'Refreshed Successfully' })
            resolve(tokens)
        })
        return promise
    }
    catch (err) {
        console.log(err)
    }

}