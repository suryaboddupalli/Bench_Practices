import React from 'react'
import { Link } from 'react-router-dom'


function HotelList({ hotels, loadCurrentItems }) {
    return (
        <div>
            <div >
                <h3>{hotels.hotelName}</h3>
                <p><img id='img' src={hotels.hotelImg} alt='hotelImage' />{hotels.hotelDescription}</p>
            </div>
            <div >
                <div >
                    <h5>Cost</h5>
                    <h6>{hotels.singleRoomPrice}</h6>
                    <Link to={`hotel/${hotels.id}`}><button className='btn btn-primary' onClick={() => loadCurrentItems(hotels._id)}>Open</button></Link>
                </div>
            </div >
        </div>
    )
}


export default HotelList