const removeEventHelperGenerator = (
  startPaint: Function,
  paint: Function,
  endPaint: Function,
): Function => {
  return function (
    canvas: HTMLCanvasElement | null,
    canvasCurrent: HTMLCanvasElement | null,
  ) {
    if (canvas === null) return;

    canvas.removeEventListener("mousedown", (event: MouseEvent) => { startPaint(event, canvasCurrent) });
    canvas.removeEventListener("mousemove", (event: MouseEvent) => { paint(event, canvasCurrent) });
    canvas.removeEventListener("mouseup", () => { endPaint(canvasCurrent) });
    canvas.removeEventListener("mouseleave", () => { endPaint(canvasCurrent) });
  }
};

export default removeEventHelperGenerator;
