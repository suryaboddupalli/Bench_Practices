import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios'

function Trail() {
    const [Balance, setBalance] = useState()

    const handleChange = (e) => {
        setBalance(1000 + parseInt([e.target.name] = e.target.value))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ Balance });
        axios.put('http://localhost:8000/customer/balUpdate/61fa2eacab342d129a5fc796', { Balance })
            .then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='number' name='Balance' onChange={handleChange} />
            <button >Deposit</button>
        </form>
    )
}

export default Trail;
