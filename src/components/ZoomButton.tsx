import React from "react";
import { Button, SvgIconProps } from "@material-ui/core";

type props = {
  icon: SvgIconProps;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ZoomButton = ({ icon, onClick }: props) => {
  return (
    <Button
      variant="contained"
      aria-label="zoom-btn"
      onClick={onClick}
    >
      {icon}
    </Button>
  );
};

export default ZoomButton;
