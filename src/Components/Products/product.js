import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart, loadCurrentItems } from '../../Redux/actions/actions'

function Product({ productData, addToCart, loadCurrentItems }) {
    return (
        <div className='col-11  col-lg-4  mb-5' >
            <div className='card ' >
                <img src={productData.Image} alt='img' style={{ height: '15rem' }} />
                <div className='card-body text-center' >
                    <h5 className='card-title'>{productData.Title}</h5>
                    <h5 className='card-title'>Rs.{productData.Price}</h5>
                    <p className='card-text'>{productData.Description}</p>
                    <Link to={`/product/${productData.id}`}><button class="btn btn-primary mt-2 me-2" onClick={() => loadCurrentItems(productData)}>Show more</button></Link>
                    <button class="btn btn-primary mt-2 ms-2 " onClick={() => { addToCart(productData.id); }} >AddToCart</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItems: (item) => dispatch(loadCurrentItems(item))
    }
}

export default connect(null, mapDispatchToProps)(Product)