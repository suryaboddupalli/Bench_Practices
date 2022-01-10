import React, { useRef } from 'react'
import {v4 as uuidv4} from 'uuid'

function Login({ getId }) {
    const IdRef = useRef()
    const PasswordRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        getId(IdRef.current.value)
    }
    const createId = ()=>{
        getId(uuidv4())
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">UserId</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" ref={IdRef} required />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" ref={PasswordRef} required />
                </div>
            </div>
            <div>
                <button type='submit' className='btn btn-primary mx-2'>Login</button>
                <button className='btn btn-secondary' onClick={createId}>Create a new Id</button>
            </div>

        </form>
    )
}

export default Login
