// AddForm.js
import React, { useState } from "react";
import Input from "../../../19.3/src/components/input";
import TodoItem from "./todo_item";

export default function AddForm(props) {
  const { todos, setTodos } = props;
  const [value, setValue] = useState("");

  const addTodo = (name) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        name: name,
        isCompleted: false
      }
    ]);
  };

  const toggleCompletion = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="mt-4">
      <form className="d-flex justify-content-between align-items-center" 
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(value);
          setValue("");
        }}>
        <Input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button className="btn btn-primary btn-sm rounded ms-2">Add</button>
      </form>
      <br/>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          isCompleted={todo.isCompleted}
          onDelete={(id) => {
            setTodos(todos.filter((s) => s.id !== id));
          }}
          onToggle={toggleCompletion}
        />
      ))}
    </div>
  );
}
