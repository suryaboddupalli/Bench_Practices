import React from 'react'
import axios from 'axios'
import { useQuery } from "react-query"

function UserDetails() {
    const { data, isError, error } = useQuery('userData', () => {
        return axios.get("http://localhost:4000/Users")
    })

    if (isError) {
        return (
            <h2>{error.message}</h2>
        )
    }
    return (
        <>
            {data?.data.map((res) => (
                <div key={res.id}>{res.name}</div>
            ))}
        </>
    )
}

export default UserDetails