import hapi from '@hapi/hapi'

export const Register = (req: hapi.Request, res: hapi.ResponseToolkit) => {
    try {
        const data = req.payload
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }

}