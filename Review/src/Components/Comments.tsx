import React, { useEffect, useState } from "react";
import "./Message.css";
import { format } from "timeago.js";
import axios from "axios";
import { useParams } from "react-router-dom";

type comment = {
  Comment: string;
  createdAt: Date;
};

function Comments() {
  const { id } = useParams();
  const [message, setMessage] = useState<comment[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/review/get/${id}`)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      {message &&
        message.map((message) => (
          <div>
            <div>
              <img src="" alt="IMAGE" />
              <p>{message.Comment}</p>
            </div>
            <div>{format(message.createdAt)}</div>
          </div>
        ))}
    </div>
  );
}

export default Comments;
