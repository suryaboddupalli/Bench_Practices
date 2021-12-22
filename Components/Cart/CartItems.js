
function CartItems({items}){
    return(
        <ul>
        <li>{items.id}</li>
        <li>{items.Name}</li>
        <li>{items.Description}</li>
        <li>{items.Price}</li>
        <li>Quantity:{items.quantity}</li>
    </ul>
    )
}

export default CartItems