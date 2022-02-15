import React from "react";

export type ProfileProps = {
  name: String;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>hello {name}</div>;
};

export default Profile;
