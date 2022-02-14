import React, { useContext } from "react";
import { QuizConsumer } from "./Context";

function Result() {
  return (
    <QuizConsumer>
      {(result) => (
        <div>
          <h2>Your Result :{result} </h2>
          <h6>Status :{result > 10 ? "Success" : "Fail"}</h6>
          <p>
            Message :
            {result > 10 ? "Congrats,You clear the test" : "Please do again"}
          </p>
        </div>
      )}
    </QuizConsumer>
  );
}

export default Result;
