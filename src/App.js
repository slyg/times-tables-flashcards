import React, { useState, useEffect } from "react";
import { initialState, update } from "./state";

const SPACE_KEY = 32;
const RIGHT_ARROW_KEY = 39;
const DOWN_ARROW_KEY = 40;

const App = () => {
  const [state, setState] = useState(initialState);

  const updateState = () => setState(update(state));

  const handleKeyDown = event => {
    switch (event.keyCode) {
      case SPACE_KEY:
      case RIGHT_ARROW_KEY:
      case DOWN_ARROW_KEY:
        updateState();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const { a, b, result, showResult, color } = state;

  const stateClass = `App-body App-body--${color} App-body--${
    showResult ? "result" : "statement"
  }`;

  return (
    <div className="App" onClick={updateState}>
      <div className={stateClass}>
        <span className="statement">
          {a.toString()} x {b.toString()}
        </span>
        <span className="result">{result}</span>
      </div>
    </div>
  );
};

export default App;
