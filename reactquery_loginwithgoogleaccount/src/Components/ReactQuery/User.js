import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useQuery } from 'react-query'

function User() {
    const { id } = useParams()
    const { data, isError, error, isFetching, isLoading } = useQuery('userData', () => {
        return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    })
    if (isError) {
        return (
            <h2>{error.message}</h2>
        )
    }

    console.log({ "isFetching": isFetching, "isLoading": isLoading })
    console.log(data?.data)
    return (
        <div>
            <h4>{data?.data.id}</h4>
            <div >{data?.data.name}</div>
        </div>
    )
}

export default User