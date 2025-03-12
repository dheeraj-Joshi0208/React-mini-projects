import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const clearDisplay = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false); 
  };

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleEquals = () => {
    if (!operator) return;

    const inputValue = parseFloat(display);
    const result = calculate(firstOperand, inputValue, operator);
    setDisplay(String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md w-64">
      <div className="w-full mb-4 p-2 text-right bg-white rounded border text-2xl h-12 flex items-center justify-end overflow-hidden">
        {display}
      </div>

      <div className="grid grid-cols-4 gap-2 w-full">
        <button
          onClick={clearDisplay}
          className="col-span-2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          AC
        </button>
        <button
          onClick={() => performOperation("/")}
          className="p-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ÷
        </button>
        <button
          onClick={() => performOperation("*")}
          className="p-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ×
        </button>

        <button
          onClick={() => inputDigit("7")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          7
        </button>
        <button
          onClick={() => inputDigit("8")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          8
        </button>
        <button
          onClick={() => inputDigit("9")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          9
        </button>
        <button
          onClick={() => performOperation("-")}
          className="p-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          −
        </button>

        <button
          onClick={() => inputDigit("4")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          4
        </button>
        <button
          onClick={() => inputDigit("5")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          5
        </button>
        <button
          onClick={() => inputDigit("6")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          6
        </button>
        <button
          onClick={() => performOperation("+")}
          className="p-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          +
        </button>

        <button
          onClick={() => inputDigit("1")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          1
        </button>
        <button
          onClick={() => inputDigit("2")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          2
        </button>
        <button
          onClick={() => inputDigit("3")}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          3
        </button>
        <button
          onClick={handleEquals}
          className="row-span-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          =
        </button>

        <button
          onClick={() => inputDigit("0")}
          className="col-span-2 p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          0
        </button>
        <button
          onClick={inputDecimal}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
