const removeEventHelperGenerator = (
  startPaint: Function,
  paint: Function,
  endPaint: Function,
  choosePolygon: Function,
): Function => {
  return (
    canvasCurrent: HTMLCanvasElement | null,
  ) => {
    if (canvasCurrent === null) return;

    canvasCurrent.removeEventListener("mousedown", (event: MouseEvent) => { startPaint(event, canvasCurrent) }, false);
    canvasCurrent.removeEventListener("mousedown", (event: MouseEvent) => { choosePolygon(event, canvasCurrent) }, false);
    canvasCurrent.removeEventListener("mousemove", (event: MouseEvent) => { paint(event, canvasCurrent) }, false);
    canvasCurrent.removeEventListener("mouseup", () => { endPaint(canvasCurrent) }, false);
    canvasCurrent.removeEventListener("mouseleave", () => { endPaint(canvasCurrent) }, false);
  }
};

export default removeEventHelperGenerator;
