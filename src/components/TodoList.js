import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          removeTodo={removeTodo}
          index={index}
        />
      ))}
    </div>
  );
}

export default TodoList;
