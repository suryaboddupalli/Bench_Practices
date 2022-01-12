import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios'

const Register = () => {
	const history = useHistory()
	const [data, setData] = useState({
		firstname: '',
		lastName: '',
		email: '',
		phone: '',
		password: '',
	})
	const changeHandler = e => {
		setData({ ...data, [e.target.name]: e.target.value })
	}
	const handleSubmit = e => {
		e.preventDefault();
		axios.post('http://localhost:8000/register', data)
			.then((res) => {
				history.push('/dashboard')
			})
			.catch((err)=>{
				console.log(err)
			})

	}

	return (
		<div className='page'>
			<div className='form-container '>
				<div className='p-3 text-center '>
					<h2>Register </h2>
					<form onSubmit={handleSubmit}>
						<div className='form-group'>
							<label className='labels'>Name</label><br />
							<input type=' text' name='Name' onChange={changeHandler} /><br />
						</div>
						<div className='form-group'>
							<label className='labels'>Email</label> <br />
							<input type='text' name='email' onChange={changeHandler} /><br />
						</div>
						<div className='form-group'>
							<label className='labels'>Phone</label><br />
							<input type='text' name='phone' onChange={changeHandler} /><br />
						</div>
						<div className='form-group'>
							<label id='labels'>Password</label><br />
							<input type='password' name='password' onChange={changeHandler} /><br />
						</div><br />
						<div className='form-group'>
							<label className='labels'>Re-Enter Password</label><br />
							<input type='password' name='Password' onChange={changeHandler} /><br />
						</div>
						<div>
							<button className='btn btn-primary'>Register</button>
						</div><br />
						<a href='./login' >Login</a>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register