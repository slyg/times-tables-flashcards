import React, { Component } from "react";
import "./App.css";

const colors = [
  "red",
  "blue",
  "green",
  "purple",
  "maroon",
  "violet",
  "turquoise",
  "greyish",
  "default"
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const getRandomNum = () => Math.trunc(Math.random() * 11);

const Times = ({ a, b }) => (
  <p>
    {a.toString()} x {b.toString()}
  </p>
);

const Result = ({ result }) => <p>{result}</p>;

const SPACE_KEY = 32;

class App extends Component {
  state = {
    a: 1,
    b: 1,
    result: 1,
    showResult: false,
    color: "default"
  };

  handleKeyDown(event) {
    switch (event.keyCode) {
      case SPACE_KEY:
        if (this.state.showResult === false) {
          this.setState({
            showResult: true
          });
        } else {
          const [a, b, color] = [getRandomNum(), getRandomNum(), randomColor()];
          const result = a * b;
          this.setState({
            a,
            b,
            result,
            color,
            showResult: false
          });
        }
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
    const bgClass = `App-body App-body--${this.state.color}`;
    return (
      <div className="App">
        <div className={bgClass}>
          {this.state.showResult ? (
            <Result {...this.state} />
          ) : (
            <Times {...this.state} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
