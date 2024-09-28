import React from "react";
import BaseIconButton from "./BaseIconButton";
import CloseIcon from "@mui/icons-material/Close";

function CloseButton({ onClick }) {
  return (
    <BaseIconButton
      id="close-button"
      text={<CloseIcon fontSize="large" />}
      variant="solid"
      color="danger"
      onClick={onClick}
    />
  );
}

export default CloseButton;
