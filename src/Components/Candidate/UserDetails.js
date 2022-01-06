import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import validate from '../../Validations/UserValidation';
import axios from 'axios'

function UserDetails() {
    const history = useHistory();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        mobile: '',
        altMobile: '',
        email: '',
        address: '',
        pincode: '',
        collegeName: '',
        degree: '',
        branch: '',
        location: '',
        yearOfPass: '',
        percent: ''
    });

    const [userErrors, setUserErrors] = useState()

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        if(validate(data)){
        setUserErrors(validate(data))
        }else{
            axios.post("https:localhost:8000/register/add",data)
            .then((res)=>{
                console.log(res)
                history.push('/instruction')
            }).catch((err)=>{
                console.log(err)
            })
        }
    }


    return (
        <div className=' ms-5 ps-4 '>
            <h1 className='text-center fixed-top bg-success p-2'>Online Assessment</h1><br /><br /><br /><br />
            <form onSubmit={handleSumbit}>
                <div className='card ps-5 me-5'>
                    <h4 className='text-center'>Personal Details</h4><br />
                    <div className='form-group me-5 '>
                        <label className='form-label'>FirstName &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='firstName' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>LastName &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='lastName' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Date Of Birth &nbsp;</label>
                        <input type='date' class="form-control" onChange={changeHandler} name='dateOfBirth' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Gender : &nbsp; &nbsp;</label>
                        <input type='radio' class="form-check-input" onChange={changeHandler} value='Male' name='gender' />Male &nbsp;
                        <input type='radio' class="form-check-input" onChange={changeHandler} value='Female' name='gender' />Female &nbsp;
                        <input type='radio' class="form-check-input" onChange={changeHandler} value='others' name='gender' />others &nbsp;
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Mobile Number &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='mobile' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Alternate Mobile Number &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='altMobile' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Email &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='email' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Address &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='address' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Pincode &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='pincode' />
                    </div><br />
                </div><br />
                <div className='card ps-5 me-5'>
                    <h4 className='text-center'>Education Details</h4><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>College Name &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='collegeName' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Degree &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='degree' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Branch &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='branch' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Location &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='location' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Year of Passing &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='yearOfPass' />
                    </div><br />
                    <div className='form-group me-5'>
                        <label className='form-label'>Percentage/CGPA &nbsp;</label>
                        <input type='text' class="form-control" onChange={changeHandler} name='percent' />
                    </div><br />
                </div><br />
                {userErrors ? <span style={{ color: 'red' }}>{userErrors}</span> : null}
                <div className='  d-md-flex justify-content-md-end'>
                    <button className='btn btn-primary '>Next</button>
                </div><br /><br /><br />
            </form>
        </div>
    )
}

export default UserDetails