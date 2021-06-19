const fitToContainer = (canvas: HTMLCanvasElement | null, parent: HTMLDivElement | null) => {
  if (canvas === null || parent === null) return;

  canvas.width  = parent.offsetWidth;
  canvas.height = parent.offsetHeight;
};

export default fitToContainer;
