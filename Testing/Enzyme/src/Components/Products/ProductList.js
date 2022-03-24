import React, { useState } from 'react'

function ProductList({ data }) {
    return (
        <div>
            <h2 className='name'>{data?.Name}</h2>
            <p>{data?.Age}</p>
        </div>
    )
}

export default ProductList