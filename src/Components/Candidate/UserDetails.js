import React, { useState } from 'react' 

function UserDetails(){
    const [data,setData] = useState({
        firstName:'',
        lastName:'',
        dateOfBirth:'',
        gender:'',
        mobile:'',
        altMobile:'',
        email:'',
        address:'',
        pincode:'',
        collegeName:'',
        degree:'',
        branch:'',
        location:'',
        yearOfPass:'',
        percent:''
    });

    const changeHandler = e => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

    const handleSumbit = (e)=>{
        e.preventDefault()
        console.log(data)
    }

    return(
        <form onSubmit={handleSumbit}>
            <div >Personal Details</div>
            <label>FirstName</label>
            <input type= 'text' onChange={changeHandler} name='firstName' />
            <label>LastName</label>
            <input type= 'text' onChange={changeHandler} name='lastName' />
            <label>Date Of Birth</label>
            <input type= 'date' onChange={changeHandler} name='dateOfBirth'  />
            <label>Gender</label>
            <input type= 'radio' onChange={changeHandler} value='Male' name='gender'/>Male &nbsp;
            <input type= 'radio' onChange={changeHandler} value='Female' name='gender' />Female &nbsp;
            <input type= 'radio' onChange={changeHandler} value='others' name='gender' />others &nbsp;
            <label>Mobile Number</label>
            <input type= 'text' onChange={changeHandler} name='mobile' />
            <label>Alternate Mobile Number</label>
            <input type= 'text' onChange={changeHandler} name='altMobile'/>
            <label>Email</label>
            <input type= 'text' onChange={changeHandler} name='email' />
            <label>Address</label>
            <input type= 'text' onChange={changeHandler} name='address'/>
            <label>Pincode</label>
            <input type= 'text' onChange={changeHandler} name='pincode'/>
            <div>Education Details</div>
            <label>College Name</label>
            <input type= 'text' onChange={changeHandler} name='collegeName' />
            <label>Degree</label>
            <input type= 'text' onChange={changeHandler} name='degree' />
            <label>Branch</label>
            <input type= 'text' onChange={changeHandler} name='branch'/>
            <label>Location</label>
            <input type= 'text' onChange={changeHandler} name='location'/>
            <label>Year of Passing</label>
            <input type= 'text' onChange={changeHandler} name='yearOfPass'/>
            <label>Percentage/CGPA</label>
            <input type= 'text' onChange={changeHandler} name='percent' />
            <button>Next</button>
        </form>
    )
}

export default UserDetails