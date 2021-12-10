import React from "react"
import { getItems } from "../Redux/actions/index"
import { useSelector, useDispatch } from "react-redux"

function Items() {
    const items = useSelector((state) => {
        return {
            itemsData: state.items
        }
    })
    console.log(items)

    const dispatch = useDispatch()
    return (
        <div>
            <div>Items</div>
            <p>{items.itemsData}</p>
            <button onClick={()=>dispatch(getItems())}>fetch data</button>

        </div>
    )
}

export default Items