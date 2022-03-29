import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchUser = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users/')
}

const fetchTodo = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/')
}

function ParallelQuery() {
    const { data: users } = useQuery('users', fetchUser)
    const { data: todos } = useQuery('Todo', fetchTodo)

    return (
        <div>ParallelQuery</div>
    )
}

export default ParallelQuery