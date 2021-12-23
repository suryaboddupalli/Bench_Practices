import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CartItems from './CartItems'

function Cart({ cart }) {
    const [totalPrice,setTotalPrice] =useState(0)
    const [totalItems,setTotalItems] =useState(0)

    useEffect(()=>{
        let items =0;
        let price =0;
        cart.forEach((item)=>{
            items += item.quantity;
            price += item.quantity * item.Price
        })

        setTotalPrice(price);
        setTotalItems(items);
    },[cart,totalItems,totalPrice,setTotalItems,setTotalPrice])

    return (
        <div>
            {cart.map(items => (
                <CartItems key={items.id} itemData={items} />
            ))}
            <div className='card'>
                <h2>Summary</h2>
                <span>TotalItems : {totalItems}</span>
                <span>Totalprice : {totalPrice}</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }

}
export default connect(mapStateToProps)(Cart)