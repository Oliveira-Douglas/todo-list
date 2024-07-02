import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo({
        text: value,
        isCompleted: false,
      });
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Adiconar Tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoForm;
