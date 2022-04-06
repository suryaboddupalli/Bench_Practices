import React from 'react'
import ProductList from './ProductList'
import { connect } from 'react-redux'
import { Stack } from '@mui/material'

function Products({ products }) {
    return (
        <Stack>
            {products.map((product) => (
                <ProductList key={product.id} productData={product} />
            ))}
        </Stack>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products

    }
}

export default connect(mapStateToProps)(Products) 