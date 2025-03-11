import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-50 to-indigo-100 rounded-xl shadow-lg max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8">React Counter</h2>

      <div className="bg-white p-6 rounded-full shadow-inner mb-8">
        <span className="text-5xl font-bold text-indigo-800">{count}</span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center"
        >
          <span className="text-xl">−</span>
        </button>

        <button
          onClick={reset}
          className="px-6 py-3 bg-gray-500 text-white font-medium rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-200"
        >
          Reset
        </button>

        <button
          onClick={increment}
          className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-200 flex items-center justify-center"
        >
          <span className="text-xl">+</span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
