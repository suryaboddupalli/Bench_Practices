import React, { ChangeEvent } from "react";
import { props } from "../../Types";

function QuestionList({ data, index, changeHandler }: props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let temp: number = data.answer === e.target.value ? 1 : 0;
    changeHandler(temp, parseInt(index));
  };
  return (
    <div className="card m-3">
      <h6>{data.title}</h6>
      <div onChange={handleChange}>
        <input type="radio" value="A" name={index} />
        {data.option[0]} &nbsp;
        <input type="radio" value="B" name={index} />
        {data.option[1]} &nbsp;
        <input type="radio" value="C" name={index} />
        {data.option[2]} &nbsp;
        <input type="radio" value="D" name={index} />
        {data.option[3]} &nbsp;
      </div>
    </div>
  );
}
export default QuestionList;
