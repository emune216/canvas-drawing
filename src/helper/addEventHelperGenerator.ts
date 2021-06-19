const addEventHelperGenerator = (
  startPaint: Function,
  paint: Function,
  endPaint: Function,
): Function => {
  return function (
    canvas: HTMLCanvasElement | null,
    canvasCurrent: HTMLCanvasElement | null,
  ) {
    if (canvas === null) return;

    canvas.addEventListener("mousedown", (event: MouseEvent) => { startPaint(event, canvasCurrent) });
    canvas.addEventListener("mousemove", (event: MouseEvent) => { paint(event, canvasCurrent) });
    canvas.addEventListener("mouseup", () => { endPaint(canvasCurrent) });
    canvas.addEventListener("mouseleave", () => { endPaint(canvasCurrent) });
  }
};

export default addEventHelperGenerator;
