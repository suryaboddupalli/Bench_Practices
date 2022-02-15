import React, { useState } from "react";

function Practice() {
  type AuthUser = {
    name: string;
    email: string;
  };

  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "surya",
      email: "surya@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is{user?.email} </div>
    </div>
  );
}

export default Practice;
