import React from 'react'
import Details from './Details'

const GetUsers = ({ value }) => (
    <div>
        hello
        
        {value.map(user => (
            <ul key={user.id}>
                <li>{user.id}</li>
                <li>{user.firstName}</li>
                <li>{user.lastName}</li>
            </ul>

        ))}
    </div>
)

export default Details(GetUsers)