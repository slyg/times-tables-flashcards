function* colorGen(colors) {
  while (true) yield* colors;
}

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

export const nextColor = () => gen.next().value;
export const getRandomNum = () => Math.trunc(Math.random() * 11);

export const initialState = {
  a: 0,
  b: 0,
  result: 0,
  showResult: false,
  color: "default"
};

export const update = state => {
  if (state.showResult === false) {
    return {
      ...state,
      showResult: true
    };
  } else {
    const [a, b, color] = [getRandomNum(), getRandomNum(), nextColor()];
    const result = a * b;
    return {
      ...state,
      a,
      b,
      result,
      color,
      showResult: false
    };
  }
};
