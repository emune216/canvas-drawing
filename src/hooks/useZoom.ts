import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { changeMagnification, changeCurrentMagnification } from "../redux/reducers/canvasStatus";

const ZOOM_IN: number = 1.1;
const ZOOM_OUT: number = 0.9;
const TIMES: number = 0.1;

const useZoom = () => {
  const dispatch = useDispatch();
  const [magnification, setMagnification] = useState<number>(0);
  const [currentMagnification, setCurrentMagnification] = useState<number>(1);

  const zoomIn = () => {
    setMagnification(ZOOM_IN);
    setCurrentMagnification((prev: number) => prev + TIMES);
  };

  const zoomOut = () => {
    setMagnification(ZOOM_OUT);
    setCurrentMagnification((prev: number) => prev - TIMES);
  };

  useEffect(() => {
    if (!magnification) return;

    dispatch(changeMagnification(magnification));
    dispatch(changeCurrentMagnification(currentMagnification));
  }, [magnification, currentMagnification]);

  return {
    zoomIn,
    zoomOut,
  };
};

export default useZoom;
