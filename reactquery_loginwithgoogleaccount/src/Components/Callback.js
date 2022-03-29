import React from 'react'
import axios from 'axios'
import { useQuery } from "react-query"

const fetchData = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
}

const onSuccess = (data) => {
    console.log("successs Data", data)
}

const onError = (error) => {
    console.log("error", error)
}


function Callbacks() {
    const { data, isError, error, isFetching, isLoading } = useQuery('userData', fetchData,
        {
            onSuccess, onError
        })

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
            {data?.data.map((res) => (
                <div key={res.id}>{res.name}</div>
            ))}
        </>
    )
}

export default Callbacks