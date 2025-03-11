import React, { useState } from "react";

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
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Todo List</h1>

      {/* Todo Input Form */}
      <form onSubmit={handleSubmit} className="w-full mb-6 flex">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          className="flex-grow p-3 border border-gray-300 rounded-l-lg "
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-lg transition-colors duration-200"
        >
          Add
        </button>
      </form>

      {/* Todo List */}
      <div className="w-full">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500 py-4">
            No tasks yet. Add one above!
          </p>
        ) : (
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <span className="break-all pr-2">{todo.text}</span>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="ml-2 p-1 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-200"
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
