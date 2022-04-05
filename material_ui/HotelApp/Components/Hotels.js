import { Card, Stack, CardMedia, CardContent, Typography, Grid, CardActions, Button } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux'

function Hotels({ currentItem }) {
    console.log(currentItem)
    return (
        <Stack>
            <Stack>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image={currentItem.hotelImg}
                        alt="img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {currentItem.hotelName}
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
            <Stack>
                <Card>
                    <CardContent>
                        <Typography variant='h3'>About</Typography>
                        <Typography variant='p'>{currentItem.Description}</Typography>
                    </CardContent>
                </Card>
                <Typography variant='h2'>Rooms</Typography>
                <Stack>
                    <Grid container my={1}>
                        <Grid item sx={8} >
                            <Card>
                                <CardContent>
                                    <Typography variant='h4'>Single Room</Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={currentItem.singleRoomImg}
                                    alt="img" />
                            </Card>
                        </Grid>
                        <Grid item sx={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant='h5'>Cost</Typography>
                                    <Typography variant='h6'>{currentItem.singleRoomPrice}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button>Book</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>
                <Stack>
                    <Grid container my={1}>
                        <Grid item sx={8} >
                            <Card>
                                <CardContent>
                                    <Typography variant='h4'>Double Room</Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={currentItem.doubleRoomImg}
                                    alt="img" />
                            </Card>
                        </Grid>
                        <Grid item sx={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant='h5'>Cost</Typography>
                                    <Typography variant='h6'>{currentItem.doubleRoomPrice}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button>Book</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack><Stack>
                    <Grid container my={1}>
                        <Grid item sx={8} >
                            <Card>
                                <CardContent>
                                    <Typography variant='h4'>Halls</Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={currentItem.doubleRoomPrice}
                                    alt="img" />
                            </Card>
                        </Grid>
                        <Grid item sx={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant='h5'>Cost</Typography>
                                    <Typography variant='h6'>{currentItem.hallPrice}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button>Book</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </Stack>
    )
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.hotel.currentItem
    }
}


export default connect(mapStateToProps)(Hotels)

