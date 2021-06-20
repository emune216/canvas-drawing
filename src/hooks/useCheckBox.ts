import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { changeCanvasMode } from "../redux/reducers/canvasStatus";

const useCheckBox = () => {
  const dispatch = useDispatch();
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckBoxValue(event.target.checked);
  };

  useEffect(() => {
    dispatch(changeCanvasMode(checkBoxValue));
  }, [checkBoxValue]);

  return {
    checkBoxValue,
    handleChange,
  };
};

export default useCheckBox;
