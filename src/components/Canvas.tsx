import React from "react";

import addEventHelperGenerator from "../helper/addEventHelperGenerator";
import removeEventHelperGenerator from "../helper/removeEventHelperGenerator";

import useCanvas from "../hooks/useCanvas";
import useMouseEvent from "../hooks/useMouseEvent";

import Wrapper from "./styles/elements/Wrapper";

const Canvas = () => {
  const { startPaint, paint, endPaint } = useMouseEvent();

  const addEventHelper: Function = addEventHelperGenerator(startPaint, paint, endPaint);
  const removeEventHelper: Function = removeEventHelperGenerator(startPaint, paint, endPaint);

  const canvasRef = useCanvas(addEventHelper, removeEventHelper);

  return (
    <Wrapper>
      <canvas ref={canvasRef} />
    </Wrapper>
  );
};

export default Canvas;
