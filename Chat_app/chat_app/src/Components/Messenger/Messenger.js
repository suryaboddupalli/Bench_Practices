import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import Conversation from './Conversation'
import "./Messenger.css"
import ChatOnline from './ChatOnline'
import { AuthContext } from '../../Context/AuthContext'
import axios from "axios"

function Messenger() {
    // const { user } = useContext(AuthContext)
    const [conversation, setConversation] = useState([])
    const [currentUser, setCurrentUser] = useState()


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        setCurrentUser(user)
        console.log(user._id)
        const getConversation = async () => {
            try {
                const res = await axios.get("http://localhost:9000/conversation/" + user._id)
                console.log(res.data)
                setConversation(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getConversation()
    }, [])

    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>Chat List</h3>
                    {conversation.map((data) => (
                        <Conversation conversation={data} currentUser={currentUser} />
                    ))}

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