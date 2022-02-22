import React, { ChangeEvent, useState, MouseEvent } from "react";
import TodoList from "./TodoList";
import { DropResult } from "react-beautiful-dnd";

type todoData = {
  input: string;
  isDone: boolean;
  id: number;
};

function Todo() {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<todoData[]>([]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodo([...todo, { input, isDone: false, id: Date.now() }]);
    setInput("");
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const item = Array.from(todo);
    const [newArray] = item.splice(source.index, 1);
    item.splice(destination.index, 0, newArray);
    setTodo(item);
  };

  return (
    <div>
      <div>
        <input type="text" name="todo" onChange={changeHandler} />
        <button onClick={handleSubmit}>Add</button>
      </div>
      {todo.map((data, index) => (
        <TodoList
          Data={data}
          id={data.id}
          index={index}
          onDragEnd={onDragEnd}
        />
      ))}
    </div>
  );
}

export default Todo;
