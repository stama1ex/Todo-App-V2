import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = (text) => {
    const now = new Date();
    const newTodo = {
      date: `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`,
      text,
      isCompleted: false,
      id: Date.now() + Math.random(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  const checkCompleted = () => {
    const todosComplete = todos.filter((todo) => todo.isCompleted);
    setCount(todosComplete.length);
  };
  useEffect(() => {
    checkCompleted();
  }, [todos]);

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 0 100px black',
        backgroundColor: 'oklch(27.4% 0.006 286.033)',
      }}
    >
      <h1 id="todoApp">Todo App</h1>
      <TodoForm
        addTodo={addTodo}
        clearAllTodos={clearAllTodos}
        clearCompleted={clearCompleted}
        todos={todos}
        completedCount={count}
      />
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
