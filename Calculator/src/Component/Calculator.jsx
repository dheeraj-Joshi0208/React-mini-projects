import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("0");
    } else if (value === "DEL") {
      setInput(input.length > 1 ? input.slice(0, -1) : "0");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };

  return (
    <div className="container">
      <div className="calc-text">
        <p name="user-input" id="user-input">
          {input}
        </p>
      </div>
      <div className="calc-keys">
        <button
          type="button"
          className="key-others operations"
          onClick={() => handleClick("AC")}
        >
          AC
        </button>
        <button
          type="button"
          className="key-others operations"
          onClick={() => handleClick("DEL")}
        >
          DEL
        </button>
        <button
          type="button"
          className="key-others operations"
          onClick={() => handleClick("%")}
        >
          %
        </button>
        <button
          type="button"
          className="key-operate operations"
          onClick={() => handleClick("/")}
        >
          /
        </button>
        <button
          type="button"
          className="numbers"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          type="button"
          className="numbers"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          type="button"
          className="numbers"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          type="button"
          className="key-operate operations"
          onClick={() => handleClick("*")}
        >
          *
        </button>
        <button
          type="button"
          className="numbers"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          type="button"
          className="numbers"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          type="button"
          className="numbers"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          type="button"
          className="key-operate operations"
          onClick={() => handleClick("-")}
        >
          -
        </button>
        <button
          type="button"
          className="numbers"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          type="button"
          className="numbers"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          type="button"
          className="numbers"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          type="button"
          className="key-operate operations"
          onClick={() => handleClick("+")}
        >
          +
        </button>
        <button
          type="button"
          className="key-zero numbers"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          type="button"
          className="numbers"
          onClick={() => handleClick(".")}
        >
          .
        </button>
        <button
          type="button"
          className="key-operate operations"
          onClick={() => handleClick("=")}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
