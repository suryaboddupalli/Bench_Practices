import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function MuiCard() {
    return (
        <Box width='300px'>
            <Card>
                <CardMedia component='img' height='200' image='https://m.media-amazon.com/images/M/MV5BMmQ4YmM3NjgtNTExNC00ZTZhLWEwZTctYjdhOWI4ZWFlMDk2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg' />
                <CardContent>
                    <Typography variant='h4'  >Movie</Typography>
                    <Typography variant='body1'>In the 1990s, Pushpa Raj is a coolie who works to smuggle red sandalwood, a rare wood that only grows in the Seshachalam Hills of the Chittoor district </Typography>
                </CardContent>
                <CardActions>
                    <Button >Show More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard