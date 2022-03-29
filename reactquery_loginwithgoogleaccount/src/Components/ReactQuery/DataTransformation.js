import React from 'react'
import axios from 'axios'
import { useQuery } from "react-query"

const fetchData = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
}


function DataTransformation() {
    const { data, isError, error, isFetching, isLoading } = useQuery('userData', fetchData,
        {
            select: (data) => {
                const user = data.data.map(user => user.name)
                return user
            }
        }
    )

    if (isLoading || isFetching) {
        return (
            <h2>Loading ....</h2>
        )
    }
    if (isError) {
        return (
            <h2>{error.message}</h2>
        )
    }

    console.log({ "isFetching": isFetching, "isLoading": isLoading })

    return (
        <>
            {data.map((res) => (
                < div key={res} > {res}</div>
            )
            )
            }
        </>
    )
}

export default DataTransformation