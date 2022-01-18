import React from 'react'
import './Hotel.css'

function Hotels() {
    return (
        <div className='card' id='cardcontainer'>
            <div className='row'>
                <div className='col-8'>
                    <div className='card' id='hotelcard'>
                        <h3>HotelName</h3>
                        <p><img id='img' src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/207500258.jpg?k=3eb0181753e9f40e67f34d28f86ebb344cb165990afb11e51531c7da5d8ba5a5&o=&hp=1' alt='hotelImage'/>
                        Plus - Very good hotel in Nellore. Courteous, friendly and helpful staff in the front office. Room service is good. Rooms are spacious. Breakfast is OK. Minus - The staff in the breakfast lounge need to improve. Instead of taking care of guests they keep chatting around. Lobby areas are stuffy with minimal airflow. Overall, will recommend this hotel</p>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='card' id='costcard'>
                        <h5>Cost</h5>
                        <h6>Rs.999</h6>
                        <button className='btn btn-primary'>Open</button>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default Hotels
