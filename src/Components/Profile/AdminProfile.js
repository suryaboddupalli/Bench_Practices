import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'


function AdminProfile() {
    const [data, setData] = useState([])
    const [showModel, setShowModel] = useState(false)

    useEffect(() => {
        axios.get('http:localhost:8000/users/details/:id')
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                console.log(err)
            })
    })

    const handleClick = () => {
        setShowModel({ showModel: !showModel })
    }

    return (
        <div>
            {data.map((admin) =>
                <div key={admin.Id}>
                    <button onClick={handleClick}>{admin.firstName + admin.lastName}</button>
                    <Model open={showModel} close={handleClick}>
                        <EditProfile admin={admin} />
                    </Model>
                </div>
            )}
        </div>
    )
}

function EditProfile(props) {
    return (
        <form >
            <h3>Profile</h3>
            <label>FirstName</label>
            <input type=' text' name='firstName' value={props.admin.firstName} />
            <label>LastName</label>
            <input type='text' name='lastName' value={props.admin.lastName} />
            <label>Email</label>
            <input type='text' name='email' value={props.admin.email} />
            <button>Save</button>
        </form>

    )
}

function Model(props) {

    return (
        props.open ? ReactDOM.createPortal(
            <div>
                {props.children}
            </div>, document.body) : null)
}

export default AdminProfile