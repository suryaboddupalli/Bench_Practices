import React from 'react'
import PropTypes from 'prop-types'

function UserList({ userData }) {
    return (
        <>
            {userData && userData.map((userData, index) => (
                <div key={index}>
                    <h2>{userData.Name}</h2>
                    <h4>{userData.Age}</h4>
                    <p>{userData.ActiveStatus}</p>
                </div>
            ))}
        </>
    )
}

UserList.propTypes = {
    userData: PropTypes.arrayOf(PropTypes.shape({
        Name: PropTypes.string,
        Age: PropTypes.number,
        ActiveStatus: PropTypes.Boolean
    }))
}

export default UserList