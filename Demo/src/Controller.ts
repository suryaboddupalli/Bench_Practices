import hapi from '@hapi/hapi'

const data = {
    name: "surya",
    age: 20,
}

export const GetData = async function (req: hapi.Request, res: hapi.ResponseToolkit) {
    try {
        const promise: any = new Promise((resolve, reject) => {
            if (data) {
                resolve(data)
            } else {
                reject("error")
            }
        });
        return promise
    }
    catch (err) {
        console.log(err)
    }
}

export const postData = async (req: hapi.Request, response: hapi.ResponseToolkit) => {
    try {
        const Data = req.payload
        const promise: any = new Promise(async (resolve, reject) => {
            if (Data) {
                resolve(data)
            }
        })
        return promise
    } catch (err) {
        console.log(err)
    }
}
