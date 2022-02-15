import React from "react";
import Test from "./Test";

function Polymorphic() {
  return (
    <div>
      <Test as="h1" size="lg" color="primary">
        Surya{" "}
      </Test>
      <Test as="p" size="sm" color="secondary">
        Naveen{" "}
      </Test>
      <Test as="h2" size="sm" color="secondary">
        Naveen{" "}
      </Test>
    </div>
  );
}

export default Polymorphic;
