import React, { useState, useEffect } from "react";
import { nextColor, getRandomNum } from "./utils";

const SPACE_KEY = 32;
const RIGHT_ARROW_KEY = 39;
const DOWN_ARROW_KEY = 40;

const initialState = {
  a: 0,
  b: 0,
  result: 0,
  showResult: false,
  color: "default"
};

const updateState = ({ state, setState }) => {
  if (state.showResult === false) {
    setState({
      ...state,
      showResult: true
    });
  } else {
    const [a, b, color] = [getRandomNum(), getRandomNum(), nextColor()];
    const result = a * b;
    setState({
      ...state,
      a,
      b,
      result,
      color,
      showResult: false
    });
  }
};

const App = () => {
  const [state, setState] = useState(initialState);

  const update = () => updateState({ state, setState });

  const handleKeyDown = event => {
    switch (event.keyCode) {
      case SPACE_KEY:
      case RIGHT_ARROW_KEY:
      case DOWN_ARROW_KEY:
        update();
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
    <div className="App" onClick={update}>
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
