import { Coordinate } from "../types";

const draw = (
  prevMousePosition: Coordinate,
  currentMousePosition: Coordinate,
  canvasCurrent: HTMLCanvasElement | null,
  ) => {
  if (canvasCurrent === null) return;

  const context = canvasCurrent.getContext("2d");

  if (context) {
    context.strokeStyle = "black";
    context.lineJoin = "round";
    context.lineWidth = 1;

    context.beginPath();
    context.moveTo(prevMousePosition.x, prevMousePosition.y);
    context.lineTo(currentMousePosition.x, currentMousePosition.y);
    context.closePath();

    context.stroke();
  }
};

export default draw;
