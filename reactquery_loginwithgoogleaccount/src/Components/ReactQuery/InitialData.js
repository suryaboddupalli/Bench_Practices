import React from 'react'
import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'

const fetchUser = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}

function InitialData(id) {
    const queryClient = useQueryClient()
    return useQuery(["user", id], fetchUser, {
        initialData: () => {
            const user = queryClient.getQueryData('user')
                ?.data?.find((user) => user.id === parseInt(id))
            if (user) {
                return {
                    data: user
                }
            } else {
                return undefined
            }
        }
    })
    return (
        <div>InitialData</div>
    )
}

export default InitialData