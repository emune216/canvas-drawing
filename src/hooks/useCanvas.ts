import { useEffect, useRef } from "react";

import fitToContainer from "../functions/fitToContainer";

const useCanvas = (addEventHelper: Function, removeEventHelper: Function) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    fitToContainer(canvasRef.current);

    const canvas: HTMLCanvasElement = canvasRef.current;
    addEventHelper(canvas, canvasRef.current);

    return () => {
      removeEventHelper(canvas, canvasRef.current);
    };
  }, []);

  return canvasRef;
};

export default useCanvas;
