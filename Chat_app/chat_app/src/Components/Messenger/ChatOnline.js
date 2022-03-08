import React from 'react'
import "./Messenger.css"

function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend" >
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                        alt="Image"
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">surya</span>
            </div>
        </div>

    )
}

export default ChatOnline

