import React, { useState } from 'react';
import { connect } from 'react-redux';
import { BookingData } from '../Redux/Reducers/BookingReducer'
import { Stack, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, MenuItem, Button } from '@mui/material'

function Booking({ book }) {
    const [data, setData] = useState({
        Name: '',
        Address: '',
        Mobile: '',
        IdNumber: '',
        From: '',
        To: '',
    })

    const [room, setRoom] = useState('')
    const [id, setId] = useState('')

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value, RoomType: room, IdType: id })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        book(data)
    }
    return (
        <Stack spacing={3} row>
            <Typography variant='h4'>Register</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3} direction='row'>
                    <TextField label='Name' name='Name' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={3} direction='row'>
                    <TextField label='LastName' name='LastName' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={3} direction='row'>
                    <TextField label='Address' type='Address' name='Address' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={3} direction='row'>
                    <TextField label='Mobile' type='number' name='Mobile' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={3} >
                    <TextField label='Rooms' onChange={(e) => setRoom(e.target.value)} fullWidth select value={''} r >
                        <MenuItem value='Single Room'>singleRoom</MenuItem>
                        <MenuItem value='Double Room'>Double Room</MenuItem>
                        <MenuItem value='Halls'>Halls</MenuItem>
                    </TextField>
                </Stack>
                <Stack spacing={3} >
                    <TextField label='Id Type' onChange={(e) => setId(e.target.value)} fullWidth select value={''} r >
                        <MenuItem value='Aadhar Card'>Aadhar card</MenuItem>
                        <MenuItem value='Pan Card'>Pan Card</MenuItem>
                        <MenuItem value='Others'>Others</MenuItem>
                    </TextField>
                </Stack>
                <Stack spacing={3} direction='row'>
                    <TextField label='Id Number' type='number' name='IdNumber' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={3} direction='row'>
                    <TextField label='From' type='date' name='From ' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={3} direction='row'>
                    <TextField label='To' type='date' name='To ' variant='outlined' onChange={handleChange} />
                </Stack>
                <Stack spacing={2} direction='row'>
                    <Button variant='contained' color='primary' >Book</Button>
                </Stack>
            </form>
        </Stack>

    )
}

const mapStateToProps = (state) => {
    return {
        data: state.book
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        book: (room) => { dispatch(BookingData(room)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)
