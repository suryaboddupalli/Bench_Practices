import React, { useEffect, useState } from 'react'
import "./Messenger.css"
import axios from "axios"

function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState()
    console.log(conversation)
    useEffect(() => {
        console.log(conversation)
        const friendId = conversation.members.find((m) => m !== currentUser)
        const getUser = async () => {
            try {
                const res = await axios("/users?userId=" + friendId);
                setUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [conversation, currentUser])

    return (
        <div className='conversation'>
            <img className='conversationImg' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt="img" />
            <span className='conversationName'>Surya</span>
        </div>
    )
}

export default Conversation