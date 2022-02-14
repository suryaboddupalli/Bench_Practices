import React from "react";
import StudentData from "./Components/StudentData";
import Conditions from "./Components/Conditions";
import Questions from "./Components/Questions/Questions";
import Result from "./Components/Result";

function App() {
  return (
    <div>
      {/* <StudentData /> */}
      <Conditions />
      <Questions />
      <Result />
    </div>
  );
}

export default App;
