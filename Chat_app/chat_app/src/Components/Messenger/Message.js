import React from 'react'
import "./Messenger.css"

function Message({ own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div>
                <img className='messageImg' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="IMAGE" />
                <p className='messageText'>Hello this is surya</p>
            </div>
        </div >
    )
}

export default Message