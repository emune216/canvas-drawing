import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { changeMagnification } from "../redux/reducers/canvasStatus";

const ZOOM_IN: number = 1.1;
const ZOOM_OUT: number = 0.9;

const useZoom = () => {
  const dispatch = useDispatch();
  const [magnification, setMagnification] = useState<number>(1);
  const [isChangeZoom, setIsChangeZoom] = useState<Boolean>(false);

  const zoomIn = () => {
    setMagnification(ZOOM_IN);
    setIsChangeZoom((prev: Boolean) => !prev);
  };

  const zoomOut = () => {
    setMagnification(ZOOM_OUT);
    setIsChangeZoom((prev: Boolean) => !prev);
  };

  useEffect(() => {
    dispatch(changeMagnification(magnification));
  }, [magnification, isChangeZoom]);

  return {
    zoomIn,
    zoomOut,
  };
};

export default useZoom;
