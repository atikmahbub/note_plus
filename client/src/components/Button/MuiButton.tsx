import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

const MuiButton = (props: ButtonProps) => {
  return (
    <Button color={props.color} variant={props.variant} onClick={props.onClick}>
      {props.children}
    </Button>
  );
};

export default MuiButton;
