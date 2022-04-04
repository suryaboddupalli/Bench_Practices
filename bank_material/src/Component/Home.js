import { Button, Grid, IconButton, Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import DeleteIcon from '@mui/icons-material/Delete';

function Home() {
    return (
        <Stack >
            <Grid container my={5} ml={15}>
                <Grid item xs={6}><Box sx={{ width: 300, height: 100 }}><Button color='secondary'><CreateNewFolderIcon />Create New-Account</Button></Box ></Grid>
                <Grid item xs={6}><Box sx={{ width: 200, height: 100 }}><Button color='secondary'><AccountBalanceWalletIcon />Deposit/Withdrawal</Button></Box></Grid>
                <Grid item xs={6}><Box sx={{ width: 200, height: 100 }}><Button color='secondary'><TransferWithinAStationIcon />Transfer</Button></Box></Grid>
                <Grid item xs={6}><Box sx={{ width: 200, height: 100 }}><Button color='secondary'>Update<TipsAndUpdatesIcon />/Delete<DeleteIcon /></Button></Box></Grid>
            </Grid>
        </Stack>
    )
}

export default Home