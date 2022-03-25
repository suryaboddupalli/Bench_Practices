import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import HotelList from './HotelList'
// import { fetchHotel, loadCurrentItems } from '../../Redux/Action'

function Hotels({ fetch, hotels, currentHotel }) {
    useEffect(() => {
        fetch()
    }, [])

    useEffect(() => {
        console.log(hotels)
    }, [hotels])
    return (
        <div>
            <HotelList hotels={hotels} currentHotel={currentHotel} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        hotels: state.hotels
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: () => dispatch(fetchHotel()),
        currentHotel: (id) => dispatch(loadCurrentItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotels)
