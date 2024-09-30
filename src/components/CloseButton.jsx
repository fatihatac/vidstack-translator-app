import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";

function CloseButton({ onClick }) {
  return (
    <Tooltip title="Close" color="danger">
      <IconButton
        id="close-button"
        variant="solid"
        color="danger"
        onClick={onClick}
        size="lg"
      >
        <CloseIcon fontSize="large" />
      </IconButton>{" "}
    </Tooltip>
  );
}

export default CloseButton;
