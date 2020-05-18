import React, { useEffect, useState } from "react";
import { keyDownUpdate } from "./effects";
import { initialState, update } from "./state";

const App = () => {
  const [state, setState] = useState(initialState);
  const updateState = () => setState(update(state));
  useEffect(keyDownUpdate(updateState));

  const { a, b, result, showResult, color } = state;

  const stateClass = [
    `App-body`,
    `App-body--${color}`,
    `App-body--${showResult ? "result" : "statement"}`,
  ].join(" ");

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
