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
  range: Range;
  coordinates: Array<Coordinate>;
};

const checkPolygonRange = (coordinate: Coordinate, rangeSet: Array<RangeSet>): Number | undefined => {
  for (let i = rangeSet.length - 1; i >= 0; i--) {
    const { x, y } = coordinate;
    const { N, E, S, W } = rangeSet[i].range;

    if (x > W && x < E && y > S && y < N) return i;
  }
};

export default checkPolygonRange;
