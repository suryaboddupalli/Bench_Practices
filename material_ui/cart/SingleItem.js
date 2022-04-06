import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'

function SingleItem({ currentItem }) {
    return (
        <Card>
            <CardMedia src={currentItem.Image} alt='img' height='300' maxWidth />
            <CardContent>
                <Typography variant='h5'>{currentItem.Title}</Typography>
                <Typography variant='p'>Rs.{currentItem.Price}</Typography>
                <Typography variant='p'>color - {currentItem.MoreDetails.color}</Typography>
                <Typography variant='p'>Storage - {currentItem.MoreDetails.Memory}</Typography>
                <Typography variant='p'>Rear Camera - {currentItem.MoreDetails.RearCamera}</Typography>
                <Typography variant='p'>Front camera - {currentItem.MoreDetails.FrontCamera}</Typography>
                <Typography variant='p'>Processor - {currentItem.MoreDetails.Processor}</Typography>
                <Typography variant='p'>Display - {currentItem.MoreDetails.Display}</Typography>
                <Typography variant='p'>Battery - {currentItem.MoreDetails.Battery}</Typography>
            </CardContent>
        </Card>

    )
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.shop.currentItem
    }
}
export default connect(mapStateToProps)(SingleItem) 