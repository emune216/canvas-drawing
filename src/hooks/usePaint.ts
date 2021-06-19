import { useState, useEffect, useRef } from "react";

import getCoordinates from "../functions/getCoordinates";
import draw from "../functions/draw";

type Coordinate = {
  x: number;
  y: number;
};

let isDraw = false;

const usePaint = () => {
  const [polygon, setPolygon] = useState<Array<Object>>([]);
  let initCoordinateRef: Coordinate | any = useRef(null);
  let coordinateRef: Coordinate | any = useRef(null);

  const startPaint = (event: MouseEvent, canvas: HTMLCanvasElement | null) => {
    if (canvas === null) return;

    isDraw = true;

    const currentCoordinates: Coordinate | undefined = getCoordinates(event, canvas);
    if (currentCoordinates) {
      initCoordinateRef = currentCoordinates;
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
      setPolygon((prev: Array<Object>) => [...prev, currentCoordinates]);
    }
  };

  const endPaint = (canvas: HTMLCanvasElement | null) => {
    if (isDraw) {
      isDraw = false;
      draw(coordinateRef, initCoordinateRef, canvas);
      setPolygon((prev: Array<Object>) => [...prev, prev[0]]);

      initCoordinateRef = null;
      coordinateRef = null;
    }
  };

  useEffect(() => {
    if (!isDraw && polygon.length) {
      setPolygon([]);
    }
  }, [polygon]);

  return {
    startPaint,
    paint,
    endPaint,
  };
};

export default usePaint;
