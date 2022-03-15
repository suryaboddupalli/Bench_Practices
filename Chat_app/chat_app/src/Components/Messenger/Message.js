import React from 'react'
import "./Message.css"
import { format } from "timeago.js"

function Message({ message, own }) {
    return (
        <>
            {message &&
                <div className={own ? "message own" : "message"}>
                    <div>
                        <img className='messageImg' src="" alt="IMAGE" />
                        <p className='messageText'>{message.text}</p>
                    </div>
                    <div>{format(message.createdAt)}</div>
                </div >}
        </>
    )
}

export default Message