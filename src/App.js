import React, { useState, useEffect } from "react";
import { initialState, update } from "./state";
import { keyDownUpdate } from "./effects";

const App = () => {
  const [state, setState] = useState(initialState);
  const updateState = () => setState(update(state));
  useEffect(keyDownUpdate(updateState));

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
