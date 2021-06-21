import { RangeSet } from "../types";

const draw = (
  context: CanvasRenderingContext2D,
  polygon: RangeSet,
  ) => {
  const { coordinates } = polygon;

  for (let i = 0; i < coordinates.length - 1; i++) {
    context.strokeStyle = "black";
    context.lineJoin = "round";
    context.lineWidth = 1;

    context.beginPath();
    context.moveTo(coordinates[i].x, coordinates[i].y);
    context.lineTo(coordinates[i + 1].x, coordinates[i + 1].y);
    context.closePath();

    context.stroke();
  }
};

export default draw;
