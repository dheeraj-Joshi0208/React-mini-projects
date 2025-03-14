import React, { useState } from "react";
import "./style.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Add new todo
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  // Delete todo
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };

  return (
    <div className="container">
      {/* Todo Input Form */}
      <form onSubmit={handleSubmit} className="w-full mb-6 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      {/* Todo List */}
      <div>
        {todos.length === 0 ? (
          <p className="text-center text-gray-500 py-4">
            No tasks yet. Add one above!
          </p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className="todo">
                <span>{todo.text}</span>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
