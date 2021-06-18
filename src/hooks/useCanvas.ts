import { useRef, useEffect } from "react";

type Coordinate = {
  x: number;
  y: number;
};

const useCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let isDraw = false;

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;

    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop,
    };
  };

  const startPaint = (event: MouseEvent) => {
    isDraw = true;
  };

  const paint = (event: MouseEvent) => {
    if (isDraw) {
      console.log(getCoordinates(event));
    }
  };

  const endPaint = (event: MouseEvent) => {
    isDraw = false;
  };

  const fitToContainer = (canvas: HTMLCanvasElement | null) => {
    if (canvas === null) return;

    canvas.style.width = "100%";
    canvas.style.height = "100%";
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    fitToContainer(canvasRef.current);

    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener("mousedown", startPaint);
    canvas.addEventListener("mousemove", paint);
    canvas.addEventListener("mouseup", endPaint);
    canvas.addEventListener("mouseleave", endPaint);

    return () => {
      canvas.removeEventListener("mousedown", startPaint);
      canvas.removeEventListener("mousemove", paint);
      canvas.removeEventListener("mouseup", endPaint);
      canvas.removeEventListener("mouseleave", endPaint);
    };
  }, []);

  return canvasRef;
};

export default useCanvas;
