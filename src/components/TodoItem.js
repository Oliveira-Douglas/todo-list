import React from "react";

function TodoItem({ todo, index, removeTodo }) {
  return (
    <div className="todo">
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(index)}>Remover</button>
    </div>
  );
}

export default TodoItem;
