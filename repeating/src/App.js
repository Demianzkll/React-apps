import logo from './logo.svg';
import './App.css';
import Notes from './Notes.js';
import { NotesProvider } from "./NotesContext";
import React, { useState, useEffect } from 'react';
import TodoItem from './TaskBoard.js';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('my_todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('my_todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(), 
      text: inputValue,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NotesProvider>
      <Notes />
    </NotesProvider>
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Мій список задач</h1>
      
      <form onSubmit={addTask} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Що потрібно зробити?"
        />
        <button type="submit">Додати</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete} 
            deleteTask={deleteTask}
          />
        ))}
      </ul>
      
      {todos.length === 0 && <p>Список порожній. Час відпочити! ☕</p>}
    </div>
    </div>
  );
}

export default App;
