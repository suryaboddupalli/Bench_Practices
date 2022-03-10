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
    const [message, setMessage] = useState()
    const [currentMessage, setCurrentMessage] = useState()
    const [newMessage, setNewMessage] = useState()
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessage((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {
            setOnlineUsers(
                currentUser.followings.filter((find) => users.some((user) => user.userId === find))
            );
        });
    }, [user]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        setCurrentUser(user)
        const getConversation = async () => {
            try {
                const res = await axios.get("http://localhost:9000/conversation/" + user._id)
                setConversation(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getConversation()

    }, [])

    useEffect(() => {
        const getMessage = async () => {
            try {
                const res = await axios.get('http://localhost:9000/message/' + currentMessage?._id)
                setMessage(res.data)
            }
            catch (error) {
                console.log(error)
            }
        }
        getMessage()
    }, [currentMessage])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const messageSend = {
            sender: currentUser._id,
            text: newMessage,
            conversationId: currentMessage._id
        }

        try {
            const res = await axios.post("http://localhost:9000/message", messageSend)
            setMessage([...message, res.data])
            console.log([...message, res.data])
        }
        catch (error) {
            console.log(error)
        }

    }
    console.log(newMessage)

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Chat List</h3>
                    {conversation && conversation.map((data, index) => (
                        <div onClick={() => setCurrentMessage(data)}>
                            <Conversation key={index} conversationData={data} currentUser={currentUser} />
                        </div>
                    ))}
                </div>

                <div className="col chat-box">
                    <h3>Chat Box</h3>
                    {currentMessage ?
                        <>
                            <div className='chat-box-top'>
                                {message && message.map(messageData => (
                                    // console.log(m)
                                    // console.log(currentUser._id)
                                    < Message message={messageData} own={messageData.sender === currentUser._id} />
                                ))}

                                <Message own={true} />
                            </div>
                            <div className='chat-box-bottom'>
                                <textarea className="chat-input" placeholder="message..." onChange={(e) => setNewMessage(e.target.value)} value={newMessage} />
                                <button className='btn' onClick={handleSubmit}>send</button>
                            </div>
                        </> : <h3 className='startChat'>Open new chat</h3>}
                </div>
                <div className="col">
                    <h3>Chat Online</h3>
                    <ChatOnline />
                </div>
            </div>
        </div >
    )
}

export default Messenger