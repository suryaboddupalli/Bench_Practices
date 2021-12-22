import React from 'react' 
import {connect} from 'react-redux'

function SingleItem({currentItem}){
    return(
        <ul>
            <li>{currentItem.id}</li>
            <li>{currentItem.Name}</li>
            <li>{currentItem.Description}</li>
            <li>{currentItem.Price}</li>

        </ul>
    )
}

const mapStateToProps= (state)=>{
    return{
        currentItem: state.shop.currentItem
    }
}
export default connect(mapStateToProps)(SingleItem) 