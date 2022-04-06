import { Autocomplete, Button, Switch, ButtonGroup, Slider, Stack, TextField, Radio, IconButton, Checkbox, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const AutoCompleteData = [
    { label: 'surya' },
    { label: 'Naveen' },
    { label: 'Revanth' },
    { label: 'Karthik' },
    { label: 'Syam' },
    { label: 'siva' },

]

function Inputs() {
    const [data, setData] = useState('')
    console.log(data)
    return (
        <Stack>
            <Autocomplete options={AutoCompleteData}
                sx={{ width: 300 }}
                renderInput={(data) => <TextField {...data} label='Names' />}
                onChange={(e, newvalue) => setData(newvalue)}
                freeSolo
            />
            <Button color='success' variant='contained' onClick={() => alert('clicked')}>button</Button>
            <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small" />
            </IconButton>
            <ButtonGroup>
                <Button variant='outlined' color={'hover' ? 'secondary' : 'info'}>btn1</Button>
                <Button variant='contained'>btn2</Button>
                <Button variant='text'>btn3</Button>
            </ButtonGroup>
            <Checkbox color='secondary' defaultChecked />
            <FormControl >
                <FormLabel>
                    Gender
                </FormLabel>
                <RadioGroup onChange={(e) => setData(e.target.value)} row >
                    <FormControlLabel control={<Radio color='secondary' />} label='Male' value='Male' />
                    <FormControlLabel control={<Radio color='secondary' />} label='Female' value='Female' />
                    <FormControlLabel control={<Radio color='secondary' />} label='others' value='others' />
                </RadioGroup>
            </FormControl>
            <Slider
                size="small"
                defaultValue={70}
                valueLabelDisplay="auto"
            />
            <Switch defaultChecked />
            <TextField label="TextField" variant="filled" color='secondary' />
        </Stack>
    )
}

export default Inputs