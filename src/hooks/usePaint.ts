import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import getCoordinates from "../functions/getCoordinates";
import drawLine from "../functions/drawLine";
import makeRange from "../functions/makeRange";

import { RootState } from "../redux/store";

import { addPolygon } from "../redux/reducers/polygon";

type Coordinate = {
  x: number;
  y: number;
};

type Range = {
  N: Number;
  E: Number;
  S: Number;
  W: Number;
};

let isDraw = false;
let isDelete = false;

const usePaint = () => {
  const dispatch = useDispatch();
  const { isDeleteMode } = useSelector((state: RootState) => state.canvasMode);
  const polygons = useSelector((state: RootState) => state.polygons.polygon);
  const [polygon, setPolygon] = useState<Array<Object>>([]);
  const [range, setRange] = useState<Range>({} as Range);
  let initCoordinateRef: Coordinate | any = useRef(null);
  let coordinateRef: Coordinate | any = useRef(null);
  let rangeRef: Range | any = useRef(null);

  const startPaint = (event: MouseEvent, canvas: HTMLCanvasElement | null) => {
    if (canvas === null) return;

    const currentCoordinates: Coordinate | undefined = getCoordinates(event, canvas);

    if (isDelete) {
      console.log(currentCoordinates);
      return;
    };

    isDraw = true;

    if (currentCoordinates) {
      initCoordinateRef = currentCoordinates;
      coordinateRef = currentCoordinates;

      const range = makeRange(rangeRef, currentCoordinates, true);

      rangeRef = range;
      setRange(range);
      setPolygon((prev: Array<Object>) => [...prev, currentCoordinates]);
      console.log(range, rangeRef);
    };
  };

  const paint = (event: MouseEvent, canvas: HTMLCanvasElement | null) => {
    if (isDelete) return;
    if (canvas === null) return;

    const currentCoordinates: Coordinate | undefined = getCoordinates(event, canvas);

    if (isDraw && currentCoordinates) {
      drawLine(coordinateRef, currentCoordinates, canvas);
      coordinateRef = currentCoordinates;

      const range = makeRange(rangeRef, currentCoordinates, false);

      rangeRef = range;
      setRange(range);
      setPolygon((prev: Array<Object>) => [...prev, currentCoordinates]);
    }
  };

  const endPaint = (canvas: HTMLCanvasElement | null) => {
    if (isDelete) return;
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

      dispatch(addPolygon({ order: polygonCount + 1, data: { range, coordinates: polygon } }));
      setPolygon([]);
    }
  }, [polygon, polygons, range]);

  useEffect(() => {
    isDelete = isDeleteMode;
  }, [isDeleteMode]);

  return {
    startPaint,
    paint,
    endPaint,
  };
};

export default usePaint;
