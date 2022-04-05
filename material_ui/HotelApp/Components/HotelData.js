import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../Redux/Reducers/HotelReducer'
import { loadCurrentItems } from '../../Redux/Actions/HotelAction'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'


function HotelData({ data, loadCurrentItems }) {
    console.log(data)
    return (
        <Stack>
            {data.map((hotel) => (
                <Grid container my={1}>
                    <Grid item sx={8} >
                        <Card>
                            <CardContent>
                                <Typography variant='h4'>{hotel.hotelName}</Typography>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={hotel.hotelImg}
                                    alt="img" />
                                <Typography variant='p'>{hotel.hotelDescription}</Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item sx={4}>
                        <Card>
                            <CardContent>
                                <Typography variant='h5'>Cost</Typography>
                                <Typography variant='h6'>{hotel.singleRoomPrice}</Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`hotel/${hotel.id}`}><Button onClick={() => loadCurrentItems(hotel)}>Book</Button></Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            ))}
        </Stack >
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.hotel.hotelDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: dispatch(fetchData()),
        loadCurrentItems: (hotel) => dispatch(loadCurrentItems(hotel))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HotelData)
