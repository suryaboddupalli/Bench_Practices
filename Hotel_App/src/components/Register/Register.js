import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { fetchRegisterUser } from '../../Redux/Reducers/UserReducer';
import RegisterValidations from '../../Validations/RegisterValidation'

const Register = () => {
	const dispatch = useDispatch()
    const [data,setData] = useState({
        Name : '',
        email : '',
        phone : '',
        password : '' ,
    })
	const [clientError,setClientError] =useState()
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})

    }
    const handleSubmit = e =>{
        e.preventDefault();
		if (RegisterValidations(data)) {
            setClientError(RegisterValidations(data))
        } else {
			dispatch(fetchRegisterUser(data))

        }
		console.log(data)
    }

	return(
        <div className='page'>
			<div className='form-container' id='box'>
				<h2>Register </h2>
                {clientError ? <span style={{ color: 'red' }}>{clientError}</span> : null}
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
					    <label className='labels'>Name</label><br/>
						<input type= ' text'   name='name' onChange={changeHandler }  /><br/>
					</div>
					<div className='form-group'>
						<label  className='labels'>Email</label> <br/>
                        <input type= 'text'   name='email'  onChange={changeHandler}  /><br/>
                    </div>
					<div className='form-group'>
						<label  className='labels'>Phone</label><br/>
                        <input type= 'text' name='phone' onChange={changeHandler} /><br/>
					</div>
					<div className='form-group'>
						<label  className='labels'>Password</label><br/>
                        <input type= 'password' name='Password' onChange={changeHandler} /><br/>
                    </div><br/>
                    <div className='form-group'>
						<label  className='labels'>Conform Password</label><br/>
                        <input type= 'password' name='Conform Password' onChange={changeHandler} /><br/>
                    </div><br/>
					<div>
						<button  className= 'btn btn-primary'>Register</button>
					</div><br/>
					<a href='./Login' className='link' >Login</a>
				</form>
			</div>
		</div>
    )
}

export default Register