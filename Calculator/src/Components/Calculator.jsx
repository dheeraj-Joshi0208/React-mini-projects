import React from "react";
import "./calculator.css";

const Calculator = () => {
  return (
    <div className="container">
      <div class="calc-text">
        <p name="user-input" id="user-input">
          0
        </p>
      </div>
      <div className="calc-keys">
        <button type="button" className="key-others operations">
          AC
        </button>
        <button type="button" className="key-others operations">
          DEL
        </button>
        <button type="button" className="key-others operations">
          %
        </button>
        <button type="button" className="key-operate operations">
          /
        </button>
        <button type="button" className="numbers">
          7
        </button>
        <button type="button" className="numbers">
          8
        </button>
        <button type="button" className="numbers">
          9
        </button>
        <button type="button" className="key-operate operations">
          *
        </button>
        <button type="button" className="numbers">
          4
        </button>
        <button type="button" className="numbers">
          5
        </button>
        <button type="button" className="numbers">
          6
        </button>
        <button type="button" className="key-operate operations">
          -
        </button>
        <button type="button" className="numbers">
          1
        </button>
        <button type="button" className="numbers">
          2
        </button>
        <button type="button" className="numbers">
          3
        </button>
        <button type="button" className="key-operate operations">
          +
        </button>
        <button type="button" className="key-zero numbers">
          0
        </button>
        <button type="button" className="numbers">
          .
        </button>
        <button type="button" className="key-operate operations">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
