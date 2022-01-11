import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useChats } from '../Context/ChatProvider'

function Chats() {
    const {chats} = useChats()

    return (
        <div>
           <ListGroup>
               {chats.map((chat,index)=>{
                   <ListGroup.Item key={index}
                   action
                   onClick={()=> selectChatIndex(index)}
                   active={chat.selected}>
                       {chat.recipient.map((recipient)=>{recipient.name}).join(',')}
                   </ListGroup.Item>
               })}
           </ListGroup>
        </div>
    )
}

export default Chats
