import React from 'react'
import axios from 'axios'
import { useQuery } from "react-query"

const fetchData = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
}

function OnclickQuery() {
    const { data, isError, error, isFetching, isLoading, refetch } = useQuery('userData', fetchData, { enabled: false })

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
        <div>
            <button onClick={refetch}>Fetch</button>
            {data?.data.map((res) => (
                <div key={res.id}>{res.name}</div>
            ))}
        </div>
    )
}

export default OnclickQuery