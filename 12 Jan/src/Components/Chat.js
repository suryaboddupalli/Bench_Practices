import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Chat({ chat, user }) {
    const [otherUser, setOtherUser] = useState()
    console.log(chat)

    useEffect(() => {
        const otherPerson = chat.members.find((id) => (id !== user._id))
        const getUser = async () => {
            try {
                const res = await axios.get('http://localhost:8000/user?userId=' + otherPerson._id)
                setOtherUser(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()
    }, [user, chat])

    return (
        <div>
            {otherUser.name}
        </div>
    )
}

export default Chat
