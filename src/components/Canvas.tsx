import React from "react";
import styled from "styled-components";

const Canvas = () => {
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
