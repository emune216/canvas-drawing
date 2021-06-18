import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";

import { RootState } from "../redux/store";
import { addPolygon } from "../redux/slices/polygon";

import Main from "./Main";
import ZoomButton from "./ZoomButton";
import DeleteCheckBox from "./DeleteCheckBox";

import Wrapper from "./styles/elements/Wrapper";

const data = { name: "test", location: [["99", "99"]] };

const Canvas = () => {
  const dispatch = useDispatch();
  const { polygon } = useSelector((state: RootState) => state.polygons);

  dispatch(addPolygon(data));

  const zoomIn = () => {
    console.log("In");
  };

  const zoomOut = () => {
    console.log("Out");
  };

  return (
    <Wrapper>
      <CanvasWrapper>
        <Main />
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
`;

export default Canvas;
