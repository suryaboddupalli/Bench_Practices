import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'


const fetchuser = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
}
function DynamicParallel({ ids }) {
    const queryResult = useQueries(
        ids.map((id) => {
            return {
                queryKey: ['user', id],
                queryFn: () => fetchuser(id)
            }
        })
    )
    return (
        <div>DynamicParallel</div>
    )
}

export default DynamicParallel