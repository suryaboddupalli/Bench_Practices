import React from 'react'
import './Hotel.css'
import HotelData from './HotelData'
import SearchBar from '../SearchBar/SearchBar'

function Hotels() {
    return (
        <div>
            <SearchBar />
            <div className='card' id='cardcontainer'>
                <HotelData />
            </div>
        </div>
    )
}

export default Hotels
