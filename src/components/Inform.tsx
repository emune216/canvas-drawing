import { useSelector } from "react-redux";

import { RootState } from "../redux/store";

const Inform = () => {
  const { currentMagnification } = useSelector((state: RootState) => state.canvasStatus);

  return (
    <span>{`현재 캔버스 배율: ${currentMagnification.toFixed(1)}배`}</span>
  );
};

export default Inform;
