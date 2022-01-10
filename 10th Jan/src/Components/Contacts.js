import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../Context/ContactProvider'

function Contacts() {
    const {contacts} = useContacts()
    return (
        <div>
           <ListGroup>
               {contacts.map((contact)=>{
                console.log(contact.name)&&
                   <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
               })}
           </ListGroup>
        </div>
    )
}

export default Contacts
