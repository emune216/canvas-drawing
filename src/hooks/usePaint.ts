import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import getCoordinates from "../functions/getCoordinates";
import drawLine from "../functions/drawLine";

import { RootState } from "../redux/store";

import { addPolygon } from "../redux/reducers/polygon";

type Coordinate = {
  x: number;
  y: number;
};

let isDraw = false;

const usePaint = () => {
  const dispatch = useDispatch();
  const polygons = useSelector((state: RootState) => state.polygons.polygon);
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
      drawLine(coordinateRef, currentCoordinates, canvas);
      coordinateRef = currentCoordinates;
      setPolygon((prev: Array<Object>) => [...prev, currentCoordinates]);
    }
  };

  const endPaint = (canvas: HTMLCanvasElement | null) => {
    if (isDraw) {
      isDraw = false;
      drawLine(coordinateRef, initCoordinateRef, canvas);
      setPolygon((prev: Array<Object>) => [...prev, prev[0]]);

      initCoordinateRef = null;
      coordinateRef = null;
    }
  };

  useEffect(() => {
    if (!isDraw && polygon.length) {
      const polygonCount = Object.keys(polygons).length;
      dispatch(addPolygon({ order: polygonCount + 1, location: polygon }))
      setPolygon([]);
    }
  }, [polygon, polygons]);

  return {
    startPaint,
    paint,
    endPaint,
  };
};

export default usePaint;
