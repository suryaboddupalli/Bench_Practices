import React from 'react'
import UserList from './UserList'


const userData = [
    {
        Name: "surya",
        Age: 12,
        ActiveStatus: true
    }, {
        Name: "Naveen",
        Age: 13,
        ActiveStatus: false
    }
]

function User() {
    return (
        <div>
            <h1>User Details</h1>
            <UserList userData={userData} />
        </div>
    )
}

export default User