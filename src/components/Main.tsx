import React from "react";
import styled from "styled-components";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";

import Canvas from "./Canvas";
import ZoomButton from "./ZoomButton";
import DeleteCheckBox from "./DeleteCheckBox";
import Inform from "./Inform";

import useZoom from "../hooks/useZoom";

import Wrapper from "./styles/elements/Wrapper";

const Main = () => {
  const { zoomIn, zoomOut } = useZoom();

  return (
    <Wrapper>
      <CanvasWrapper>
        <Canvas />
        <div className="delete-btn-container">
          <DeleteCheckBox />
        </div>
        <div className="btn-container">
          <div>
            <ZoomButton icon={<ZoomInIcon />} onClick={zoomIn} />
          </div>
          <div>
            <ZoomButton icon={<ZoomOutIcon />} onClick={zoomOut} />
          </div>
        </div>
        <div className="information-container">
          <Inform />
        </div>
      </CanvasWrapper>
    </Wrapper>
  );
};

const CanvasWrapper = styled.div`
  position: relative;
  height: -webkit-fill-available;
  margin: 2rem;
  border: 1px solid black;

  @media only screen and (max-width: 600px)  {
    height: 100%;
    margin: 1rem;
  }

  .delete-btn-container {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  .btn-container {
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    div:nth-child(1) {
      margin-bottom: 0.5rem;
    }
  }

  .information-container {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export default Main;
