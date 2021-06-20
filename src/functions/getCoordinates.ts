import { Coordinate } from "../types";

const getCoordinates = (event: MouseEvent, canvas: HTMLCanvasElement | null): Coordinate | undefined => {
  if (canvas === null) return;

  return {
    x: event.offsetX,
    y: event.offsetY,
  };
};

export default getCoordinates;
