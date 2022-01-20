import React from 'react'
import { fetchData } from '../Redux/Reducers/HotelReducer'
import { connect} from 'react-redux'

function Hotel({data}) {
    console.log(data)
    return (
        <div>
            <button >click</button>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        data:state.hotel.hotelDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetch: dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotel)
