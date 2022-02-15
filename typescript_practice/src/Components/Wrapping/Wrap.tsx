import React from "react";
import Button from "./Button";
import Input from "./Input";

function Wrap() {
  return (
    <div>
      <Button varient="secondary" onClick={() => console.log("clicked")} />
      <Input type="text" value="surya" />
    </div>
  );
}

export default Wrap;
