export const FETCH_DATA = "FETCH_DATA"


export const fetchData = (data) => {
    console.log(data)
    return {
        type: FETCH_DATA,
        payload: data
    }
}

const userData = [
    {
        Name: "surya",
        Age: 12,
        ActiveStatus: true
    }, {
        Name: "Naveen",
        Age: 13,
        ActiveStatus: false
    }
]

export const fetch = () => {
    return function (dispatch) {
        dispatch(fetchData(userData))
    }
}
