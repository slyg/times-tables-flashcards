import React, { Component } from "react";
import "./App.css";

function* colorGen(colors) {
  while (true) yield* colors;
}

const SPACE_KEY = 32;
const RIGHT_ARROW_KEY = 39;
const DOWN_ARROW_KEY = 40;

const gen = colorGen([
  "red",
  "blue",
  "green",
  "purple",
  "maroon",
  "violet",
  "turquoise",
  "greyish",
  "default"
]);

const nextColor = () => gen.next().value;
const getRandomNum = () => Math.trunc(Math.random() * 11);

class App extends Component {
  state = {
    a: 0,
    b: 0,
    result: 0,
    showResult: false,
    color: "default"
  };

  change() {
    if (this.state.showResult === false) {
      this.setState({
        showResult: true
      });
    } else {
      const [a, b, color] = [getRandomNum(), getRandomNum(), nextColor()];
      const result = a * b;
      this.setState({
        a,
        b,
        result,
        color,
        showResult: false
      });
    }
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case SPACE_KEY:
      case RIGHT_ARROW_KEY:
      case DOWN_ARROW_KEY:
        this.change();
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  render() {
    const { a, b, result, showResult, color } = this.state;

    const stateClass = `App-body App-body--${color} App-body--${
      showResult ? "result" : "statement"
    }`;
    return (
      <div className="App" onClick={this.change.bind(this)}>
        <div className={stateClass}>
          <span className="statement">
            {a.toString()} x {b.toString()}
          </span>
          <span className="result">{result}</span>
        </div>
      </div>
    );
  }
}

export default App;
