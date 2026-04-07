import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTask }) => {
  return (
    <li style={{ 
      display: 'flex', 
      alignItems: 'center', 
      marginBottom: '10px',
      textDecoration: todo.completed ? 'line-through' : 'none' 
    }}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleComplete(todo.id)} 
      />
      <span style={{ flexGrow: 1, marginLeft: '10px' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTask(todo.id)} style={{ color: 'red' }}>
        Видалити
      </button>
    </li>
  );
};

export default TodoItem;