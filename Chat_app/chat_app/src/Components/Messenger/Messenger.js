import React from 'react'
import Message from './Message'
import Conversation from './Conversation'
import "./Messenger.css"
import ChatOnline from './ChatOnline'

function Messenger() {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>Chat List</h3>
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
                <div class="col chat-box">
                    <h3>Chat Box</h3>
                    <div className='chat-box-top'>
                        <Message />
                        <Message own={true} />
                    </div>
                    <div className='chat-box-bottom'>
                        <textarea className="chat-input" placeholder="message..." />
                        <button className='btn'>send</button>
                    </div>
                </div>
                <div class="col">
                    <h3>Chat Online</h3>
                    <ChatOnline />
                </div>
            </div>
        </div >
    )
}

export default Messenger