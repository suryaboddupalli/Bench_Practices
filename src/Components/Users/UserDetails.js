import React, { useState } from 'react'

function UserDetails() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http:localhost:8000/users/details')
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })  
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user) =>
                    <tr key={user.Id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default UserDetails