import React from "react";
import List from "./List";

// const items = [1, 2, 4, 5];
// const items = ["apple", "mango", "banana"];
const items = [
  {
    name: "surya",
    age: 21,
  },
  {
    name: "naveen",
    age: 21,
  },
  {
    name: "revanth",
    age: 21,
  },
];

function Home() {
  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default Home;
