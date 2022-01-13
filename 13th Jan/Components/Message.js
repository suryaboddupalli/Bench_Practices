import "./Style/message.css";

export default function Message({ message, user}) {
  return (
    <div className={user ? "message user" : "message"}>
      <div className="messageTop">
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{message.createdAt}</div>
    </div>
  );
}
