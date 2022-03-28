import React, { useEffect, useState } from 'react'
import axios from "axios"

function Users() {
    const [data, setData] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        axios.get('http://localhost:4000/Users')
            .then(res => setData(res.data))
            .catch(error => setError(error.message))
    }, [])

    if (error) {
        return (
            <h1>{error}</h1>
        )
    }
    return (
        <div>
            {data.map((res) => (
                <h4>{res.Name}</h4>
            ))}
        </div>
    )
}

export default Users