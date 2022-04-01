import { Autocomplete, Stack, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const skills = ['HTML', 'CSS', 'Javascript', 'TypeScript', 'React JS']

function MuiAutoComplete() {
    const [value, setValue] = useState()
    console.log(value)
    return (
        <>
            <Box sx={{
                backgroundColor: 'secondary.light',
                color: 'white',
                height: '100px',
                width: '100px',
                padding: '10px',
                '&:hover': {
                    backgroundColor: 'secondary.dark'
                }
            }}>
                BOx
            </Box>
            <Stack spacing={2} >
                <Autocomplete options={skills}
                    renderInput={(params) => <TextField {...params} label='skills' />}
                    value={value}
                    onChange={(e, newValue) => setValue(newValue)}
                    freeSolo
                />
            </Stack>
        </>
    )
}

export default MuiAutoComplete