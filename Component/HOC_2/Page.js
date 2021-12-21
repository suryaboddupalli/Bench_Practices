import React from 'react'
import { userData, itemsData } from './Data'
import ItemsList from './ItemList'
import UserList from './UserList'
import Details from './Details'

const Users = Details(UserList, userData)
const Items = Details(ItemsList, itemsData)

class Page extends React.Component {
    render() {
        return (
            <div>
                <Users />
                <Items />
            </div>
        )
    }
}

export default Page
