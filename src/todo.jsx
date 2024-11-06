import React, {useState} from 'react';
import './styles.css';

                

const TodoItem = ({ todo, onDelete, onToggle }) => (
  
  <div className="todo-item">
    <link rel="stylesheet" href="" />
    <span
      
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </span>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </div>
);




// function
const AddTodo = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">add</button>
    </form>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <AddTodo onAdd={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;
