import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addPolygon } from "../redux/slices/polygon";

import useCanvas from "../hooks/useCanvas";

import Wrapper from "./styles/elements/Wrapper";

const Main = () => {
  const dispatch = useDispatch();
  const [path, setPath] = useState([]);
  const canvasRef = useCanvas();

  return (
    <Wrapper>
      <canvas ref={canvasRef} />
    </Wrapper>
  );
};

export default Main;
