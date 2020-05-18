function* colorGen(colors) {
  while (true) yield* colors;
}
const gen = colorGen(
  "red blue green purple maroon violet turquoise greyish default".split(" ")
);
const nextColor = () => gen.next().value;
const getRandomNum = () => Math.trunc(Math.random() * 11) + 2;

export const initialState = {
  a: 0,
  b: 0,
  result: 0,
  showResult: false,
  color: "default",
};

export const update = (state) => {
  if (state.showResult === false) {
    return {
      ...state,
      showResult: true,
    };
  } else {
    const [a, b] = [getRandomNum(), getRandomNum()];
    return {
      ...state,
      a,
      b,
      result: a * b,
      color: nextColor(),
      showResult: false,
    };
  }
};
