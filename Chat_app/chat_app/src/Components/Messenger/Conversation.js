import React, { useEffect, useState } from 'react'
import "./Messenger.css"
import axios from "axios"

function Conversation({ conversationData, currentUser }) {
    const [user, setUser] = useState([])
    useEffect(() => {
        const friendId = conversationData.members.find((m) => m !== currentUser)
        const getUser = async () => {
            try {
                const res = await axios("http://localhost:9000/auth/friends/" + friendId);
                setUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [conversationData, currentUser])

    return (
        <>
            {user && user.map((data) => (

                < div key={data._id} className='conversation' >
                    <img className='conversationImg' src={data.Profile} alt="img" />
                    <span className='conversationName'>{data._id}{data.Name}</span>
                </div>
            ))
            }
        </>

    )
}

export default Conversation