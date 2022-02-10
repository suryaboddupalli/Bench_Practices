import React, { ChangeEvent, FC, useState } from "react";
import TodoList from "./TodoList";
import { todo } from "../types";

const Todo: FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [todoList, setTodoList] = useState<todo[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "Name") {
      setName(e.target.value);
    } else {
      setAge(Number(e.target.value));
    }
  };

  const addData = (): void => {
    const newTodo = { Name: name, Age: age };
    setTodoList([...todoList, newTodo]);
    console.log(todoList);
  };

  const deleteTodo = (deleteList: string): void => {
    setTodoList(
      todoList.filter((dataList) => {
        return dataList.Name != deleteList;
      })
    );
  };

  return (
    <div>
      <div>
        <label>
          Name : <input type="text" name="Name" onChange={handleChange} />
        </label>
        <label>
          Age : <input type="number" name="Age" onChange={handleChange} />
        </label>
        <button onClick={addData}>Add</button>
      </div>
      <div>
        {todoList.map((data: todo, key: number) => {
          return <TodoList key={key} dataList={data} deleteTodo={deleteTodo} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
