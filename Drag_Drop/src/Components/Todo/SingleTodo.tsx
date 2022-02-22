import React from "react";

type data = {
  input: string;
  isDone: boolean;
  id: number;
};

type props = {
  List: data;
  todo: data[];
  setTodo: React.Dispatch<React.SetStateAction<data[]>>;
};

function SingleTodo(props: props) {
  console.log(props.List.input);
  console.log(props.todo);
  return <div>{props.List.input}</div>;
}

export default SingleTodo;
