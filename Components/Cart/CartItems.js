
function CartItems({ itemData }) {
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
        </div>
    </div>
    )
}

export default CartItems