import React, { useState } from 'react';
import HooksPage from './HooksPage';
export const userContext = React.createContext()

const Form = () => {
    const [data, setData] = useState({
        id: '',
        name: ''
    })
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >id :<input type='text' name='id' onChange={changeHandler} /></label> <br />
                <label >Name : <input type="text" name='name' onChange={changeHandler} /></label><br />
                <button>submit</button>
            </form>
            <div>
                <userContext.Provider>
                    <HooksPage value={data} />
                </userContext.Provider>
            </div>
        </div>
    )
}

export default Form