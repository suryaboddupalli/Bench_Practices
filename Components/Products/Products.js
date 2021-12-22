import React from 'react' 
import Product from './product'
import { connect } from 'react-redux'

function Products({products}){
    return(
        <div>
            {products.map((product)=>(
                <Product key={product.id}  productData={product}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        products : state.shop.products
        
    }
}

export default connect(mapStateToProps)(Products) 