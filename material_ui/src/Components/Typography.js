import React from 'react'
import { Typography } from '@mui/material'

function MuiTypography() {
    return (
        <div>
            <Typography variant='h1' >H1 Data</Typography>
            <Typography variant='h2' >H2 Data</Typography>
            <Typography variant='h3' >H3 Data</Typography>
            <Typography variant='h4' >H4 Data</Typography>
            <Typography variant='h4' component='h1' gutterBottom>H4 Data</Typography>
            <Typography variant='h5' >H5 Data</Typography>
            <Typography variant='h6' >H6 Data</Typography>
            <Typography variant='subtitle1'>subtitle1</Typography>
            <Typography variant='subtitle2' >subtitle2</Typography>

            <Typography variant='subtitle1'>subtitle1</Typography>
            <Typography variant='subtitle2' >subtitle2</Typography>

            <Typography variant='body1'>The design tool renders the components in a web runtime. It uses the same React implementation as your production environment.
            </Typography>
            <Typography variant='body2' >The design tool renders the components in a web runtime. It uses the same React implementation as your production environment.
            </Typography>

        </div>
    )
}

export default MuiTypography