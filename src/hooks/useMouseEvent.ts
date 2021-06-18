import { useState, useRef } from "react";

import getCoordinates from "../functions/getCoordinates";
import draw from "../functions/draw";

type Coordinate = {
  x: number;
  y: number;
};

let isDraw = false;

const useMouseEvent = () => {
  const [polygon, setPolygon] = useState<Array<Object>>([]);
  let coordinateRef: Coordinate | any = useRef({});

  const startPaint = (event: MouseEvent, canvas: HTMLCanvasElement | null) => {
    if (canvas === null) return;

    isDraw = true;

    const currentCoordinates: Coordinate | undefined = getCoordinates(event, canvas);
    if (currentCoordinates) {
      coordinateRef = currentCoordinates;
      setPolygon((prev: Array<Object>) => [...prev, currentCoordinates]);
    };
  };

  const paint = (event: MouseEvent, canvas: HTMLCanvasElement | null) => {
    if (canvas === null) return;

    const currentCoordinates: Coordinate | undefined = getCoordinates(event, canvas);

    if (isDraw && currentCoordinates) {
      draw(coordinateRef, currentCoordinates, canvas);
      coordinateRef = currentCoordinates;
    }
  };

  const endPaint = () => {
    isDraw = false;
    coordinateRef = {};
  };

  return {
    startPaint,
    paint,
    endPaint,
  };
};

export default useMouseEvent;
