import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import getCoordinates from "../functions/getCoordinates";
import drawLine from "../functions/drawLine";
import checkPolygonRange from "../functions/checkPolygonRange";
import makePolygonRange from "../functions/makePolygonRange";

import { RootState } from "../redux/store";
import { addPolygon, deletePolygon } from "../redux/reducers/polygon";
import { changeMagnification } from "../redux/reducers/canvasStatus";

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

type RangeSet = {
  order: number;
  range: Range;
  coordinates: Array<Coordinate>;
};

let isDraw: Boolean = false;
let isDelete: Boolean = false;
let count: number = 0;
let polygonSet: Array<RangeSet> = [] as Array<RangeSet>;

const usePaint = () => {
  const dispatch = useDispatch();
  const { isDeleteMode } = useSelector((state: RootState) => state.canvasStatus);
  const polygons = useSelector((state: RootState) => state.polygons.polygon);
  const [polygon, setPolygon] = useState<Array<Object>>([]);
  const [range, setRange] = useState<Range>({} as Range);
  let initCoordinateRef: Coordinate | any = useRef(null);
  let coordinateRef: Coordinate | any = useRef(null);
  let rangeRef: Range | any = useRef(null);

  const startPaint = (event: MouseEvent, canvas: HTMLCanvasElement | null) => {
    if (isDelete) return;
    if (canvas === null) return;

    isDraw = true;
    dispatch(changeMagnification(1));

    const currentCoordinates: Coordinate | undefined = getCoordinates(event, canvas);

    if (currentCoordinates) {
      initCoordinateRef = currentCoordinates;
      coordinateRef = currentCoordinates;

      const range = makePolygonRange(rangeRef, currentCoordinates, true);

      rangeRef = range;
      setRange(range);
      setPolygon((prev: Array<Object>) => [...prev, currentCoordinates]);
    };
  };

  const paint = (event: MouseEvent, canvas: HTMLCanvasElement | null) => {
    if (isDelete) return;
    if (canvas === null) return;

    const currentCoordinates: Coordinate | undefined = getCoordinates(event, canvas);

    if (isDraw && currentCoordinates) {
      drawLine(coordinateRef, currentCoordinates, canvas);
      coordinateRef = currentCoordinates;

      const range = makePolygonRange(rangeRef, currentCoordinates, false);

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

  const choosePolygon = (event: MouseEvent, canvas: HTMLCanvasElement | null) => {
    if (!isDelete) return;
    if (canvas === null) return;

    dispatch(changeMagnification(1));

    const currentCoordinates: Coordinate | undefined = getCoordinates(event, canvas);
    if (!currentCoordinates) return;

    const target = checkPolygonRange(currentCoordinates, polygonSet);
    if (target !== undefined) dispatch(deletePolygon(target));
  };

  useEffect(() => {
    if (!isDraw && polygon.length) {
      dispatch(addPolygon({ order: ++count, range, coordinates: polygon }));
      setPolygon([]);
    }
  }, [polygon, range]);

  useEffect(() => {
    isDelete = isDeleteMode;
    polygonSet = polygons;
  }, [isDeleteMode, polygons]);

  return {
    startPaint,
    paint,
    endPaint,
    choosePolygon,
  };
};

export default usePaint;
