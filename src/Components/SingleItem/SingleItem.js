import React from 'react'
import { connect } from 'react-redux'

function SingleItem({ currentItem }) {
    return (
        <div className='card' >
            <div className='ms-5' >
                <img src={currentItem.Image} alt={'img'} className='img-fluid' style={{ width: 500, height: 300 }} />
            </div>
            <div className='ms-3' >
                <h5>{currentItem.Title} </h5>
                <span >Rs.{currentItem.Price}</span>
                <p>color - {currentItem.MoreDetails.color}</p>
                <p>Storage - {currentItem.MoreDetails.Memory}</p>
                <p>Rear Camera - {currentItem.MoreDetails.RearCamera}</p>
                <p>Front camera - {currentItem.MoreDetails.FrontCamera}</p>
                <p>Processor - {currentItem.MoreDetails.Processor}</p>
                <p>Display - {currentItem.MoreDetails.Display}</p>
                <p>Battery - {currentItem.MoreDetails.Battery}</p>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.shop.currentItem
    }
}
export default connect(mapStateToProps)(SingleItem) 