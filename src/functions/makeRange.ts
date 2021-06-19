type Coordinate = {
  x: Number;
  y: Number;
};

type Range = {
  N: Number;
  E: Number;
  S: Number;
  W: Number;
};

const makeRange = (range: Range, coordinate: Coordinate, init: Boolean) => {
  const { x, y } = coordinate;

  if (init) {
    range = {
      N: y,
      E: x,
      S: y,
      W: x,
    };

    return range;
  };

  if (x > range.E) range.E = x;
  if (x < range.W) range.W = x;
  if (y > range.N) range.N = y;
  if (y < range.S) range.S = y;

  return range;
};

export default makeRange;
