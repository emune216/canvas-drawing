import { useEffect, MutableRefObject } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";

import drawPolygons from "../functions/drawPolygons";

const useRepaintCanvas = (canvas: MutableRefObject<HTMLCanvasElement | null>) => {
  const { magnification, isChangeZoom } = useSelector((state: RootState) => state.canvasStatus);
  const polygons = useSelector((state: RootState) => state.polygons.polygon);

  useEffect(() => {
    const context = canvas.current?.getContext("2d");
    if (!context || !canvas.current) return;

    context.clearRect(0, 0, canvas.current.width, canvas.current.height);
    context.transform(
      magnification,
      0,
      0,
      magnification,
      (magnification - 1) * canvas.current.width / 2 * (- 1),
      (magnification - 1) * canvas.current.height / 2 * (- 1)
    );

    polygons.forEach(polygon => {
      drawPolygons(context, polygon);
    });
  }, [polygons, magnification, isChangeZoom]);
};

export default useRepaintCanvas;
