import React, { useState } from 'react'

function Profile() {
    const [data, setData] = useState([])
    const [showModel, setShowModel] = useState(false)

    useEffect(() => {
        axios.get('http:localhost:8000/users/details')
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
            {data.map((user) =>
                <div key={user.Id}>
                    <button onClick={handleClick}>{user.firstName + user.lastName}</button>
                    <Model open={showModel} close={handleClick}>
                        <EditProfile user={user} />
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
            <input type=' text' name='firstName' value={props.user.firstName} />
            <label>LastName</label>
            <input type='text' name='lastName' value={props.user.lastName} />
            <label>Email</label>
            <input type='text' name='email' value={props.user.email} />
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

export default Profile