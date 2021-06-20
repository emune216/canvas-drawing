import { useEffect, MutableRefObject } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";

import drawPolygons from "../functions/drawPolygons";

const useRepaintCanvas = (canvas: MutableRefObject<HTMLCanvasElement | null>) => {
  const polygons = useSelector((state: RootState) => state.polygons.polygon);

  useEffect(() => {
    const context = canvas.current?.getContext("2d");
    if (!context || !canvas.current) return;

    context.clearRect(0, 0, canvas.current.width, canvas.current.height);

    polygons.forEach(polygon => {
      drawPolygons(context, polygon);
    });
  }, [polygons]);
};

export default useRepaintCanvas;
