import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart, loadCurrentItems } from '../../Redux/actions/actions'

function Product({ productData, addToCart, loadCurrentItems }) {
    return (
        <ul>
            <li>{productData.id}</li>
            <li>{productData.Name}</li>
            <li>{productData.Description}</li>
            <li>{productData.Price}</li>
            <li><Link to={`/product/${productData.id}`}><button onClick={()=>loadCurrentItems(productData)}>View</button></Link></li>
            <li><button onClick={() => { addToCart(productData.id); console.log(productData) }} >AddToCart</button></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItems:(item)=>dispatch(loadCurrentItems(item))
    }
}

export default connect(null, mapDispatchToProps)(Product)