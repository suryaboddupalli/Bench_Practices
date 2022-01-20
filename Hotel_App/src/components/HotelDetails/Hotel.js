import React from 'react';
import { connect } from 'react-redux'

function Hotel({ currentItem }) {
    console.log(currentItem)
    return (
        <div>
            <div className='col-12'>
                <div className='card' id='hotelcard'>
                    <h3>{currentItem.hotelName}</h3>
                    <p><img id='image' src={currentItem.hotelImg} alt='hotelImage' /></p>
                </div>
            </div>

            <div>
                <div>
                    <h2>About</h2>
                    <p>{currentItem.Description}</p>
                </div>
                <div>
                    <h2>Room</h2>
                    <div>
                        <div className='row'>
                            <div className='card col-8' id='hotelcard'>
                                <h3>Single Room</h3>
                                <p><img id='img' src={currentItem.singleRoomImg} alt='singleRoomImage' />{currentItem.singleRoomDetails}</p>
                            </div>
                            <div className='col-4'>
                                <div className='card' id='costcard'>
                                    <h5>Cost</h5>
                                    <h6>{currentItem.singleRoomPrice}</h6>
                                    <button className='btn btn-primary'>Book</button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='card col-8' id='hotelcard'>
                                <h3>Double Room</h3>
                                <p><img id='img' src={currentItem.doubleRoomImg} alt='DoubleRoomImage' />{currentItem.doubleRoomDetails}</p>
                            </div>
                            <div className='col-4'>
                                <div className='card' id='costcard'>
                                    <h5>Cost</h5>
                                    <h6>{currentItem.doubleRoomPrice}</h6>
                                    <button className='btn btn-primary'>Book</button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='card col-8' id='hotelcard'>
                                <h3>Halls</h3>
                                <p><img id='img' src={currentItem.hallImg} alt='hallImage' />{currentItem.hallDetails}</p>
                            </div>
                            <div className='col-4'>
                                <div className='card' id='costcard'>
                                    <h5>Cost</h5>
                                    <h6>{currentItem.hallPrice}</h6>
                                    <button className='btn btn-primary'>Book</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Location</h2>
                    <h6>{currentItem.hotelLocation}</h6>
                </div>
                <div>
                    <h2>Facility</h2>
                    <h6>{currentItem.Facility}</h6>

                </div>


            </div>
        </div>

    )

}

const mapStateToProps = (state) => {
    return {
        currentItem: state.hotel.currentItem
    }
}


export default connect(mapStateToProps)(Hotel)

