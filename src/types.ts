export type Coordinate = {
  x: number;
  y: number;
};

export type Range = {
  N: number;
  E: number;
  S: number;
  W: number;
};

export type RangeSet = {
  order: number;
  range: Range;
  coordinates: Array<Coordinate>;
};
