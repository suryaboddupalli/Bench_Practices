import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MuiButtons() {
    const [format, setFormat] = useState([])

    const onChange = (e, updateFormat) => {
        setFormat(updateFormat)
    }
    console.log(format)

    return (
        <Stack spacing={2}>
            <Stack spacing={3} direction='row'>
                <Button variant='text' href='https://www.google.com/'>text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary' >Primary</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
                <Button variant='contained' color='warning'>warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='error'>error</Button>
                <Button variant='contained' color='success'>success</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='outlined' color='primary' >Primary</Button>
                <Button variant='outlined' color='secondary'>secondary</Button>
                <Button variant='outlined' color='warning'>warning</Button>
                <Button variant='outlined' color='info'>Info</Button>
                <Button variant='outlined' color='error'>error</Button>
                <Button variant='outlined' color='success'>success</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='text' color='primary' >Primary</Button>
                <Button variant='text' color='secondary'>secondary</Button>
                <Button variant='text' color='warning'>warning</Button>
                <Button variant='text' color='info'>Info</Button>
                <Button variant='text' color='error'>error</Button>
                <Button variant='text' color='success'>success</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='contained' size='small'  >small</Button>
                <Button variant='contained' size='medium' >medium</Button>
                <Button variant='contained' size='large'>large</Button>
            </Stack>
            <Stack direction='row'>
                <Button variant='contained' disableElevation disableRipple onClick={() => alert('clicked')} startIcon={<SendIcon />}>send</Button>
                <Button variant='contained' endIcon={<SendIcon />}>send</Button>
                <IconButton color='success' size='small'>
                    <SendIcon />
                </IconButton>
            </Stack>
            <Stack spacing={2} direction='row'>
                <ButtonGroup variant='contained' color='success' orientation='vertical'>
                    <Button size='small'  >small</Button>
                    <Button size='medium' >medium</Button>
                    <Button size='large'>large</Button>
                </ButtonGroup>
            </Stack>
            <Stack>
                <ToggleButtonGroup value={format} onChange={onChange} color='secondary' exclusive>
                    <ToggleButton value='bold'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='italic'><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='underlined'><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MuiButtons