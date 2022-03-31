import { Box, FormControl, FormControlLabel, Radio, FormLabel, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

function MuiRadio() {
    const [data, setData] = useState('')
    console.log(data)
    return (
        <div>
            <Box>
                <FormControl>
                    <FormLabel>Year of Experience</FormLabel>
                    <RadioGroup onChange={(e) => setData(e.target.value)} row >
                        <FormControlLabel control={<Radio color='secondary' size='small' />} label='0-2' value='0-2' />
                        <FormControlLabel control={<Radio color='secondary' />} label='3-6' value='3-6' />
                        <FormControlLabel control={<Radio color='secondary' />} label='more than 6' value='more than 6' />
                    </RadioGroup>
                </FormControl>
            </Box>
        </div>
    )
}

export default MuiRadio