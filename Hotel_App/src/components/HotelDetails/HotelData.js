import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../../Redux/Reducers/HotelReducer'
import {loadCurrentItems} from '../../Redux/Actions/HotelAction'
import {Link} from 'react-router-dom'


function HotelData({ data ,loadCurrentItems}) {
    console.log(data)
    return (
        <div >
            {data.map((hotel) => (
                <div className='row'>
                    <div className='col-8'>
                        <div className='card' id='hotelcard'>
                            <h3>{hotel.hotelName}</h3>
                            <p><img id='img' src={hotel.hotelImg} alt='hotelImage' />{hotel.hotelDescription}</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card' id='costcard'>
                            <h5>Cost</h5>
                            <h6>{hotel.singleRoomPrice}</h6>
                            <Link to={`hotel/${hotel.id}`}><button className='btn btn-primary' onClick={()=>loadCurrentItems(hotel)}>Open</button></Link>
                        </div>
                    </div>
                </div>

            ))}

        </div>
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
