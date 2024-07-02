import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {    
    setTodos([ ...todos, todo ])
  }

  const removeTodo = (index) => {    
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TodoForm addTodo={addTodo} />      
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
