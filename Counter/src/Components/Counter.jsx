import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-auto">

      <div className="mb-8">
        <span className="text-5xl font-bold text-gray-900">{count}</span>
      </div>

      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-6 py-3 bg-black text-white font-medium rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
        >
          <span className="text-xl">−</span>
        </button>

        <button
          onClick={reset}
          className="px-6 py-3 bg-white text-black border border-gray-300 font-medium rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200"
        >
          Reset
        </button>

        <button
          onClick={increment}
          className="px-6 py-3 bg-black text-white font-medium rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
        >
          <span className="text-xl">+</span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
