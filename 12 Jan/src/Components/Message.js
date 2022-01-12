import React from 'react'

function Message({message,user}) {
    return (
        <div>
            {message.text}
        </div>
    )
}

export default Message
