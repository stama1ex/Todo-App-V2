import { useState } from 'react';
import Button from '../UI/Button';

const TodoForm = ({
  todos,
  addTodo,
  clearAllTodos,
  clearCompleted,
  completedCount = 0,
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    input.trim() && addTodo(input.trim());
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            height: '36px',
            margin: 'auto',
            borderRadius: '4px',
          }}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Enter new todo"
        />
        <Button
          text="Submit"
          type="submit"
          style={{
            color: 'lightgreen',
          }}
        />
      </form>
      {todos.length > 0 && (
        <>
          <p style={{ color: 'lightgray' }}>
            Завершено: {completedCount} из {todos.length}
          </p>
          <div
            style={{
              height: '12px',
              backgroundColor: '#333',
              borderRadius: '6px',
              overflow: 'hidden',
              marginTop: '0.5rem',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${(completedCount / todos.length) * 100}%`,
                backgroundColor: 'lightgreen',
                transition: 'width 0.3s ease-in-out',
              }}
            />
          </div>

          <label
            htmlFor="progressBar"
            style={{ color: 'lightgray', marginLeft: '8px' }}
          >
            {todos.length > 0
              ? Math.floor((completedCount * 100) / todos.length)
              : 0}
            %
          </label>
        </>
      )}
      <hr
        style={{
          borderColor: 'black',
        }}
      />

      {todos.length > 0 ? (
        <>
          <Button
            style={{ color: 'red' }}
            onClick={clearAllTodos}
            text="Clear all"
          />
          <Button
            style={{ color: 'lightblue' }}
            onClick={clearCompleted}
            text="Clear completed"
          />
        </>
      ) : (
        <h2>Todo список пуст</h2>
      )}
    </div>
  );
};

export default TodoForm;
