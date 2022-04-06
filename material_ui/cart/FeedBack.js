import { Alert, AlertTitle, Backdrop, Snackbar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material'
import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function FeedBack() {
    const [backDrop, setBackDrop] = useState(false)
    const [dialog, setDialog] = useState(false)
    const [snackbar, setSnackbar] = useState(false)

    const handleClick = () => {
        setBackDrop(true)
    }
    const Clicked = () => {
        setBackDrop(false)
    }
    const handleClose = () => {
        setDialog(false)
        setSnackbar(false)
    }
    const dialogClick = () => {
        setDialog(true)
    }
    const handleSubmit = () => {
        alert('Submitted')
        handleClose()
    }
    const snackClick = () => {
        setSnackbar(true)
    }
    return (
        <Stack>
            <Stack>
                <Alert severity='warning'>
                    <AlertTitle>Warning</AlertTitle>This is Alert Message</Alert>
            </Stack>
            <Stack>
                <Button onClick={handleClick}>open</Button>
                <Backdrop onClick={Clicked} open={backDrop}>
                    <CircularProgress />
                </Backdrop>
            </Stack>
            <Stack>
                <Button onClick={dialogClick}>Open Dialog</Button>
                <Dialog open={dialog}
                    onClose={handleClose}>
                    <DialogTitle>Check</DialogTitle>
                    <DialogContent>
                        <DialogContentText >
                            Please check the data anthing is missing
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </Stack>
            <Stack>
                <Button variant="outlined" onClick={snackClick}>
                    open snackbar
                </Button>
                <Snackbar open={snackbar} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" >
                        snackbar Message
                    </Alert>
                </Snackbar>
            </Stack>
        </Stack>
    )
}

export default FeedBack