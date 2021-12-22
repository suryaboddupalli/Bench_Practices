import React from 'react'
import {connect} from 'react-redux' 
import CartItems from './CartItems'

function Cart({cart}){
    return(
        <div>
             {cart.map(items=>(
                <CartItems items={items} />
            ))}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        cart:state.shop.cart
    }

}
export default connect(mapStateToProps)(Cart)