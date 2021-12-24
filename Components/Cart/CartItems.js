import { connect } from 'react-redux'
import {removeToCart} from '../../Redux/actions/actions'

function CartItems({ itemData, removeToCart}) {
    return (
        <div className='card' >
            <div className='ms-5' >
                <img src={itemData.Image} alt={'img'} className='img-fluid' style={{ width: 500, height: 300 }} />
            </div>
            <div className='ms-3' >
                <h5>{itemData.Title}</h5>
                <span >Rs.{itemData.Price}</span>
                <p>{itemData.Description}</p>
                <p>Quantity:{itemData.quantity}</p>
                <button onClick={()=>{removeToCart(itemData.id)}}>Remove</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeToCart: (id) => { dispatch(removeToCart(id)) }
    }
}

export default connect(null, mapDispatchToProps)(CartItems)