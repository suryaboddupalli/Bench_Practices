import axios from "axios";
import { useEffect, useState } from "react";

function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get("http://localhost:9000/auth/friends/" + currentId);
            setFriends(res.data);
        };

        getFriends();
    }, [currentId]);

    useEffect(() => {
        setOnlineFriends(friends?.filter((find) => onlineUsers.includes(find._id)));
    }, [friends, onlineUsers]);

    const handleClick = async (user) => {
        try {
            const res = await axios.get(
                `http://localhost:9000/conversations/find/${currentId}/${user._id}`
            );
            setCurrentChat(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="chatOnline">
            {onlineFriends.map((online) => (
                <div className="chatOnlineFriend" onClick={() => handleClick(online)}>
                    <div className="chatOnlineImgContainer">
                        <img
                            className="chatOnlineImg"
                            src={online.Profile}
                            alt="Image"
                        />
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <span className="chatOnlineName">{online?.username}</span>
                </div>
            ))}
        </div>
    );
}

export default ChatOnline