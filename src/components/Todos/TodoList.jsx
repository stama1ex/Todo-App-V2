import Todo from './Todo';

const TodoList = ({ todos, onToggle }) => {
  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
      {todos.map((todo) => (
        <Todo onToggle={onToggle} key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
