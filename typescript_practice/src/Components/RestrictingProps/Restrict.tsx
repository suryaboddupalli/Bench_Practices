import React from "react";
import Number from "./Number";

function Restrict() {
  return (
    <div>
      <Number value={10} isPositive />
    </div>
  );
}

export default Restrict;
