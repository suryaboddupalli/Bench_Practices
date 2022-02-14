import React, { useState } from "react";
import Data from "./Questions.json";
import QuestionList from "./QuestionList";
import { details } from "../../Types";
import { QuizProvider } from "../Context";

function AptitudePage() {
  const [marks, setMarks] = useState<number[]>([]);
  const [result, setResult] = useState<number>(0);
  var tempMarks = [];
  const changeHandler = (value: number, index: number) => {
    tempMarks = marks;
    tempMarks[index] = value;
    setMarks([...tempMarks]);
    setResult(marks.reduce((a, b) => a + b, 0));
  };

  console.log(marks);

  const handleClick = () => {
    console.log(result);
  };

  return (
    <QuizProvider value={result}>
      <div>
        <h1 className="text-center fixed-top bg-success p-2">
          Online Assessment
        </h1>
        <br />
        <br />
        <br />

        {Data.map((data: details, index: number) => (
          <QuestionList
            data={data}
            index={index.toString()}
            changeHandler={changeHandler}
          />
        ))}
        <div className="  d-md-flex justify-content-md-end">
          <button
            type="submit"
            className="btn btn-primary me-5"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </QuizProvider>
  );
}
export default AptitudePage;
