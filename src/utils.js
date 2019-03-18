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
