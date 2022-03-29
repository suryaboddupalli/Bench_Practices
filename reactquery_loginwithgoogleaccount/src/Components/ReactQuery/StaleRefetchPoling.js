import React from 'react'
import axios from 'axios'
import { useQuery } from "react-query"
import { Link } from 'react-router-dom'


function UserData() {
    const { data, isError, error, isFetching, isLoading } = useQuery('userData', () => {
        return axios.get("https://jsonplaceholder.typicode.com/users")
    },
        {
            cacheTime: 3000,
            staleTime: 20000,
            refetchOnMount: true,
            refetchInterval: 2000,
            refetchIntervalInBackground: true
        })

    if (isError) {
        return (
            <h2>{error.message}</h2>
        )
    }

    console.log({ "isFetching": isFetching, "isLoading": isLoading })
    return (
        <>
            {data?.data.map((res) => (
                <Link to={`/user/${res.id}`}>{res.name}</Link>
            ))}
        </>
    )
}

export default UserData