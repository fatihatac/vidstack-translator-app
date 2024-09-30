import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/joy/IconButton";

function CloseButton({ onClick }) {
  return (
    <IconButton
      id="close-button"
      variant="solid"
      color="danger"
      onClick={onClick}
      size="lg"
    >
      <CloseIcon fontSize="large" />
    </IconButton>
  );
}

export default CloseButton;
