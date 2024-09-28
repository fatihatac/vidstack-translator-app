import React from "react";
import IconButton from "@mui/joy/IconButton";

function BaseIconButton({ id, variant, color, text, onClick }) {
  return (
    <IconButton
      id={id}
      variant={variant}
      color={color}
      size="lg"
      onClick={onClick}
    >
      {text}
    </IconButton>
  );
}

export default BaseIconButton;
