

import React from 'react'
import { fetchData } from '../Redux/Reducers/HotelReducer'
import { connect, useDispatch } from 'react-redux'

function Hotel({data}) {
    // const dispatch = useDispatch()
    // const handleClick = () => {
    //     dispatch(fetchData())
    //     console.log('clicked')
    // }
    console.log(data)
    
    return (
        <div>
            <button>click</button>
        </div>
    )
}

const mapStateToDispatch = (dispatch) => {
    return {
        data: dispatch(fetchData())
    }
}

export default connect(null, mapStateToDispatch)(Hotel)


// const hotels = [
//     {
//         hotelName: 'Minerva Grand',
//         location: 'Grand Trunk Road,Saraswathi Nagar,Dargamitta,Nellore,524003',
//         img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207500258.jpg?k=3eb0181753e9f40e67f34d28f86ebb344cb165990afb11e51531c7da5d8ba5a5&o=&hp=1',
//         description: '"Plus - Very good hotel in Nellore. Courteous, friendly and helpful staff in the front office. Room service is good. Rooms are spacious. Breakfast is OK. Minus - The staff in the breakfast lounge need to improve. Instead of taking care of guests they keep chatting around. Lobby areas are stuffy with minimal airflow. Overall, will recommend this hotel"',
//         About: 'Situated in the bustling city of Nellore, Hotel Minerva Grand’s regal ambience and tranquil environment are fortified by splendid hospitality.Hotel Minerva Grand has conference and convention spaces, which make it an ideal choice for business meetings and official parties.The famous Lord Vishnu Sri Ranganathaswamy Temple is just a 10-minute drive away from the hotel.Minerva Grand is located at a 10-minute driving distance from the Nellore Railway Station.'

//     }
// ]
