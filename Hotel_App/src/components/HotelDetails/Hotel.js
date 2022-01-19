import React from 'react';

function Hotel() {
    return (
        <div>
            <div className='row'>
                <div className='col-8'>
                    <div className='card' id='hotelcard'>
                        <h3>HotelName</h3>
                        <p><img id='img' src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/207500258.jpg?k=3eb0181753e9f40e67f34d28f86ebb344cb165990afb11e51531c7da5d8ba5a5&o=&hp=1' alt='hotelImage' /></p>
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
            <div>
                <div>
                    <h2>About</h2>
                    <ul>
                        <li>The hotel features both an indoor and outdoor swimming pool.  </li>
                        <li>Guests can relax and unwind in the hotel's spa. </li>
                        <li>The hotel has a conference room that can be used for business meetings and events.</li>
                    </ul>
                </div>
                <div>
                    <h2>Room</h2>
                    <div>
                        <div className='card col-4' id='hotelcard'>
                            <h3>Single Room</h3>
                            <p><img id='img' src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/207500258.jpg?k=3eb0181753e9f40e67f34d28f86ebb344cb165990afb11e51531c7da5d8ba5a5&o=&hp=1' alt='hotelImage' /></p>
                        </div>
                        <div className='card col-4' id='hotelcard'>
                            <h3>Single Room</h3>
                            <p><img id='img' src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/207500258.jpg?k=3eb0181753e9f40e67f34d28f86ebb344cb165990afb11e51531c7da5d8ba5a5&o=&hp=1' alt='hotelImage' /></p>
                        </div>
                        <div className='card col-4' id='hotelcard'>
                            <h3>Halls</h3>
                            <p><img id='img' src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/207500258.jpg?k=3eb0181753e9f40e67f34d28f86ebb344cb165990afb11e51531c7da5d8ba5a5&o=&hp=1' alt='hotelImage' /></p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Location</h2>
                    <ul>
                        <li>Street Name,Land Mark</li>
                        <li>Discrict</li>
                        <li>state and pincode</li>
                    </ul>
                </div>


            </div>
        </div>

    )

}

export default Hotel;
