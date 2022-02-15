import React, { useState } from "react";

function Assertion() {
  type UserData = {
    name: string;
    email: string;
  };

  const [user, setUser] = useState<UserData>({} as UserData);
  const handleLogin = () => {
    setUser({
      name: "surya",
      email: "surya@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is{user.email} </div>
    </div>
  );
}

export default Assertion;
