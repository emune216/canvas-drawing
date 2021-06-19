import { useEffect, useRef } from "react";

import fitToContainer from "../functions/fitToContainer";

const useCanvas = (addEventHelper: Function, removeEventHelper: Function) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (canvasRef.current === null || parentRef.current === null) return;

    fitToContainer(canvasRef.current, parentRef.current);

    const canvas: HTMLCanvasElement = canvasRef.current;
    addEventHelper(canvas);

    return () => {
      removeEventHelper(canvas);
    };
  }, []);

  return { canvasRef, parentRef };
};

export default useCanvas;
