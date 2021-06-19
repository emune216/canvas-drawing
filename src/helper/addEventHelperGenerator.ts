const addEventHelperGenerator = (
  startPaint: Function,
  paint: Function,
  endPaint: Function,
): Function => {
  return (
    canvasCurrent: HTMLCanvasElement | null,
  ) => {
    if (canvasCurrent === null) return;

    canvasCurrent.addEventListener("mousedown", (event: MouseEvent) => { startPaint(event, canvasCurrent) }, false);
    canvasCurrent.addEventListener("mousemove", (event: MouseEvent) => { paint(event, canvasCurrent) }, false);
    canvasCurrent.addEventListener("mouseup", () => { endPaint(canvasCurrent) }, false);
    canvasCurrent.addEventListener("mouseleave", () => { endPaint(canvasCurrent) }, false);
  }
};

export default addEventHelperGenerator;
