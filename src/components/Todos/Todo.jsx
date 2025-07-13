const Todo = ({ date, text, isCompleted, onToggle, id }) => {
  return (
    <li
      onClick={() => onToggle(id)}
      style={{
        cursor: 'pointer',
        textDecoration: isCompleted ? 'line-through' : 'none',
        color: isCompleted ? '#999' : 'white',
        backgroundColor: '#1a1a1a',
        margin: '4px',
        borderRadius: '1rem',
        padding: '8px 24px',
        overflow: 'auto',
        userSelect: 'none',
        wordBreak: 'break-all',
      }}
    >
      {text} <span style={{ fontSize: '0.8rem', marginLeft: 8 }}>({date})</span>
    </li>
  );
};

export default Todo;
