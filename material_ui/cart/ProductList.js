import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { addToCart, loadCurrentItems } from '../../Redux/actions/actions'

function ProductList({ productData, addToCart, loadCurrentItems }) {
    return (
        <Card>
            <CardMedia
                src={productData.Image} alt='img' height='10' />
            <CardContent>
                <Typography variant='h5'>{productData.Title}</Typography>
                <Typography variant='h5'><CurrencyRupeeIcon />{productData.Price}</Typography>
                <Typography variant='p'>{productData.Description}</Typography>
                <Link href={`/product/${productData.id}`}><Button onClick={() => loadCurrentItems(productData)}>Show more</Button></Link>
                <Button onClick={() => { addToCart(productData.id) }}>AddToCart</Button>
            </CardContent>
        </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItems: (item) => dispatch(loadCurrentItems(item))
    }
}

export default connect(null, mapDispatchToProps)(ProductList)