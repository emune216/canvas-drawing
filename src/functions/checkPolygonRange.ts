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

type RangeSet = {
  order: number
  range: Range;
  coordinates: Array<Coordinate>;
};

const checkPolygonRange = (coordinate: Coordinate, rangeSet: Array<RangeSet>): number | undefined => {
  for (let i = rangeSet.length - 1; i >= 0; i--) {
    const { x, y } = coordinate;
    const { order, range } = rangeSet[i];

    if (x > range.W
      && x < range.E
      && y > range.S
      && y < range.N
      ) return order;
  }
};

export default checkPolygonRange;
