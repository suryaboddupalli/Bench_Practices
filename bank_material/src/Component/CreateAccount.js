import React, { useState } from 'react';
import axios from 'axios'
import { Stack, TextField, Typography, Box, Button } from '@mui/material';

const CreateAccount = () => {
    const [data, setData] = useState({
        Name: '',
        Account_Number: '',
        Phone: '',
        Address: '',
        Address_Proof: '',
        Pan_Card: ''
    })
    const [response, setResponse] = useState()
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })

    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)
        axios.post('http://localhost:8000/customer/add', data)
            .then((res) => {
                setResponse(res.data)
            }).catch((err) => {
                console.log(err)
            })

        setData('')
    }

    return (
        <Stack spacing={3} row>
            <Box sx={{
                width: 300,
                height: 650,
                marginLeft: 55,
                marginTop: 5,
                paddingLeft: 4,
                border: '0.5px solid black '
            }}>
                <Typography variant='h4' color='secondary' padding={3}>CreateAccount</Typography>
                <form onSubmit={handleSubmit}>
                    <Stack direction='row' paddingLeft={2}>
                        <TextField label='Name' color='secondary' name='Name' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack direction='row' padding={2}>
                        <TextField label='Account_Number' color='secondary' name='Account_Number' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack direction='row' padding={2}>
                        <TextField label='Phone' color='secondary' name='Phone' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack direction='row' padding={2}>
                        <TextField label='Address' color='secondary' name='Address' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack direction='row' padding={2}>
                        <TextField label='Address_Proof' color='secondary' name='Address_Proof' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack direction='row' padding={2}>
                        <TextField label='Pan_Card' color='secondary' name='Pan_Card' variant='outlined' onChange={changeHandler} />
                    </Stack>
                    <Stack spacing={2} direction='row' paddingLeft={10}>
                        <Button variant='contained' color='secondary' >Create</Button>
                    </Stack>
                </form>
            </Box>
        </Stack >
        // <div className='form'>
        //     <div className='form-container' id='box'>
        //         <h2>Create Account </h2>
        //         <form onSubmit={handleSubmit}>
        //             <div className='form-group'>
        //                 <label className='labels'>Name</label><br />
        //                 <input type='text' className='text-box' name='Name' onChange={changeHandler} /><br />
        //             </div>
        //             <div className='form-group'>
        //                 <label className='labels'>Account_Number</label> <br />
        //                 <input type='text' className='text-box' name='Account_Number' onChange={changeHandler} /><br />
        //             </div>
        //             <div className='form-group'>
        //                 <label className='labels'>Phone</label><br />
        //                 <input type='text' className='text-box' name='Phone' onChange={changeHandler} /><br />
        //             </div>
        //             <div className='form-group'>
        //                 <label className='labels'>Address</label><br />
        //                 <input type='text' className='text-box' name='Address' onChange={changeHandler} /><br />
        //             </div>
        //             <div className='form-group'>
        //                 <label className='labels'>Address Proof</label><br />
        //                 <input type='text' className='text-box' name='Address_Proof' onChange={changeHandler} /><br />
        //             </div>
        //             <div className='form-group'>
        //                 <label className='labels'>Pan Card</label><br />
        //                 <input type='text' className='text-box' name='Pan_Card' onChange={changeHandler} /><br />
        //             </div><br />
        //             <div>
        //                 <button className='btn btn-primary'>Create</button>
        //             </div><br />
        //             <button className='btn btn-secondary' onClick={() => history.push('/customers')}>Back</button>
        //             {response && <div className='text-success'>{response}</div>}
        //         </form>
        //     </div>
        // </div>
    )
}

export default CreateAccount