import { MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

function MuiSelect() {
    const [course, setCourse] = useState([])

    const handleChange = (e) => {
        setCourse(e.target.value)
    }

    console.log(course)
    return (
        <div>
            <TextField label='Courses' fullWidth select value={course}
                onChange={handleChange} SelectProps={{ multiple: true }}>
                <MenuItem value='html'>Html</MenuItem>
                <MenuItem value='css'>Css</MenuItem>
                <MenuItem value='Javascript'>Javascript</MenuItem>
                <MenuItem value='react'>React</MenuItem>
            </TextField>
        </div >
    )
}

export default MuiSelect