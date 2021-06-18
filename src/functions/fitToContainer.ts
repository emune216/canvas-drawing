const fitToContainer = (canvas: HTMLCanvasElement | null) => {
  if (canvas === null) return;

  canvas.style.width = "100%";
  canvas.style.height = "100%";

  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
};

export default fitToContainer;
