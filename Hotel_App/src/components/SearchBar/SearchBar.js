import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../Redux/Reducers/HotelReducer'
import { loadCurrentItems } from '../../Redux/Actions/HotelAction'
import { Link } from 'react-router-dom'

function SearchBar({ data }) {
    console.log(data)
    const [searchValue, setSearchValue] = useState()
    console.log(searchValue)

    return (
        <div>
            <input type='text' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
            {data.filter((val) => {
                console.log(val.hotelName)
                console.log(searchValue)
                if (val.hotelName.toLowerCase().includes(searchValue.toLowerCase())) {
                    return (
                        <div className='row'>
                            <div className='col-8'>
                                <div className='card' id='hotelcard'>
                                    <h3>{val.hotelName}</h3>
                                    <p><img id='img' src={val.hotelImg} alt='hotelImage' />{val.hotelDescription}</p>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='card' id='costcard'>
                                    <h5>Cost</h5>
                                    <h6>{val.singleRoomPrice}</h6>
                                    <Link to={`hotel/${val.id}`}><button className='btn btn-primary' onClick={() => loadCurrentItems(val)}>Open</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
                // else if (val.hotelName.toLowerCase().includes(searchValue.toLowerCase())) {
                //     return val
                // }
            })

            }
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
