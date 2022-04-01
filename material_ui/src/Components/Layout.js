import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Layout() {
    return (
        <>
            <Box sx={{
                backgroundColor: 'primary.dark',
                color: 'black',
                height: '100px',
                width: '100px',
                padding: '10px',
                border: '2px solid',
                '&:hover': {
                    backgroundColor: 'secondary.dark'
                }
            }}>
                BOX
            </Box>
            <Grid container my={1}>
                <Grid bgcolor='primary.light' item xs={6}> <Box p={2}>item 1</Box></Grid>
                <Grid bgcolor='primary.dark' item xs={6}><Box p={2}>item 2</Box></Grid>
                <Grid bgcolor='primary.dark' item xs={6}><Box p={2}>item 3</Box></Grid>
                <Grid bgcolor='primary.light' item xs={6}><Box p={2}>item 4</Box></Grid>
            </Grid>
        </>
    )
}

export default Layout