import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/store";
import { addPolygon } from "../redux/slices/polygon";

const data = { name: "test", location: [["99", "99"]] };

const Canvas = () => {
  const dispatch = useDispatch();
  const { polygon } = useSelector((state: RootState) => state.polygons);

  dispatch(addPolygon(data));

  return (
    <CavnasWrapper>
      <span>Canvas</span>
    </CavnasWrapper>
  );
};

const CavnasWrapper = styled.div`
  background: green;

  @media only screen and (max-width: 600px)  {
    width: 100%;
    height: 80%;
  }
  @media only screen and (min-width: 600px)  {
    width: 100%;
    height: 100%;
  }
`;

export default Canvas;
