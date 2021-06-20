import React from "react";

import addEventHelperGenerator from "../helpers/addEventHelperGenerator";
import removeEventHelperGenerator from "../helpers/removeEventHelperGenerator";

import useCanvas from "../hooks/useCanvas";
import usePaint from "../hooks/usePaint";

import Wrapper from "./styles/elements/Wrapper";

const Canvas = () => {
  const { startPaint, paint, endPaint, choosePolygon } = usePaint();

  const addEventHelper: Function = addEventHelperGenerator(startPaint, paint, endPaint, choosePolygon);
  const removeEventHelper: Function = removeEventHelperGenerator(startPaint, paint, endPaint, choosePolygon);

  const { canvasRef, parentRef } = useCanvas(addEventHelper, removeEventHelper);

  return (
    <Wrapper ref={parentRef}>
      <canvas ref={canvasRef} />
    </Wrapper>
  );
};

export default Canvas;
