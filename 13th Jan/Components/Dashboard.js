import React, { useState, useEffect } from 'react'
import Chat from './Chat'
import Message from './Message'
import { useContext } from 'react'
import { LoginContext } from '../Context/context';
import axios from 'axios'
import { io } from "socket.io-client";

function Dashboard() {
    const { user } = useContext(LoginContext)
    const [chat, setChat] = useState([])
    const [currentChat, setCurrentChat] = useState()
    const [messages, setMessages] = useState()
    const [newMessage, setNewMessage] = useState()
    const [socket, setSocket] = useState(null)
    const [arrivalMessage, setArrivalMessage] = useState(null);

    useEffect(() => {
        socket.current = io("ws://localhost:9000");
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
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {
            setOnlineUsers(
                user.followings.filter((f) => users.some((u) => u.userId === f))
            );
        });

        useEffect(() => {
            const getChat = async () => {
                try {
                    console.log(user)
                    const res = await axios.get('http://localhost:8000/chat/' + user._id)
                    setChat(res.data)
                } catch (err) {
                    console.log(err)
                }
            }
            getChat()
        }, [user._id]);

        useEffect(() => {
            const getmessage = async () => {
                try {
                    const res = await axios.get('http:localhost:8000/message/' + currentChat._id)
                    setMessages(res.data)
                } catch (err) {
                    console.log(err)
                }
            }
            getmessage()
        }, [currentChat])

        const handleSubmit = (e) => {
            e.preventDefault();
            const message = {
                sender: user._id,
                text: newMessage,
                chatId: currentChat._id,
            }
            try {
                const res = axios.post('/message', message)
                setMessages([...messages, res.data])
            } catch (err) {
                console.log(err)
            }
        }

        return (
            <div class="container ">
                <div class="row ">
                    <div class="col-3">
                        {chat.map((chatData) => {
                            <div onClick={() => setCurrentChat(chatData)}>
                                {console.log(chatData)}
                                <Chat chat={chatData} />
                            </div>
                        })}
                    </div>
                    <div class="col-6">
                        {currentChat ?
                            <div>
                                {messages.map((mes) => {
                                    <Message message={mes} user={mes.sender === user._id} />
                                })}

                            </div>
                            : <div>Open new Chat</div>}
                        <div>
                            <textarea onChange={(e) => setNewMessage(e.target.value)}
                                value={newMessage}></textarea>
                            <button onClick={handleSubmit}>send</button>
                        </div>

                    </div>
                    <div class="col-3">online</div>
                </div>
            </div>

        )
    }

export default Dashboard
