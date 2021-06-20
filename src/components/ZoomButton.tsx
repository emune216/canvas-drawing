import React from "react";
import { Button, SvgIconProps } from "@material-ui/core";

type ZoomButtonProps = {
  icon: SvgIconProps;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ZoomButton = ({ icon, onClick }: ZoomButtonProps) => {
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
