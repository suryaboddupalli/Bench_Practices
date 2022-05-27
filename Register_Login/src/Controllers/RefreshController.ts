import hapi from '@hapi/hapi'
import { verifyRefreshToken, signAccessToken, refreshToken } from '../Helpers/JwtHelpers'
import { RToken } from '../Interfaces/index'
import { SUCCESS, BAD_REQUEST, INTERNAL_SERVER_ERROR } from '../Constants/http'


export const RefreshController = async (req: hapi.Request, res: hapi.ResponseToolkit) => {
    try {
        const Token = req.payload
        const promise = await new Promise(async (resolve, reject) => {
            if (!Token) {
                const response = res.response('Token is Required').code(BAD_REQUEST)
                resolve(response)
            }
            const userId = await verifyRefreshToken((Token as RToken).refreshToken)
            const access_Token = await signAccessToken(userId as string)
            const refresh_Token = await refreshToken(userId as string)
            const tokens = res.response({
                access_Token,
                refresh_Token,
                message: 'Refreshed Successfully'
            }).code(SUCCESS)
            resolve(tokens)
        })
        return promise
    }
    catch (err) {
        res.response({ err }).code(INTERNAL_SERVER_ERROR)
    }

}