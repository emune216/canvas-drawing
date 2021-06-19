import React from "react";

import addEventHelperGenerator from "../helper/addEventHelperGenerator";
import removeEventHelperGenerator from "../helper/removeEventHelperGenerator";

import useCanvas from "../hooks/useCanvas";
import usePaint from "../hooks/usePaint";

import Wrapper from "./styles/elements/Wrapper";

const Canvas = () => {
  const { startPaint, paint, endPaint } = usePaint();

  const addEventHelper: Function = addEventHelperGenerator(startPaint, paint, endPaint);
  const removeEventHelper: Function = removeEventHelperGenerator(startPaint, paint, endPaint);

  const { canvasRef, parentRef } = useCanvas(addEventHelper, removeEventHelper);

  return (
    <Wrapper ref={parentRef}>
      <canvas ref={canvasRef} />
    </Wrapper>
  );
};

export default Canvas;
