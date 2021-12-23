import React from 'react'
import Product from './product'
import { connect } from 'react-redux'

function Products({ products }) {
    return (
        <section className='container'>
            <div className='row '>
                {products.map((product) => (
                    <Product key={product.id} productData={product} />
                ))}
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products

    }
}

export default connect(mapStateToProps)(Products) 