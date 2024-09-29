import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/joy/IconButton";

function PlayButton({ onClick, disabled }) {
  return (
    <IconButton
      id="play-button"
      variant="solid"
      color="success"
      size="lg"
      onClick={onClick}
      disabled={disabled}
    >
      <PlayArrowIcon fontSize="large" />
    </IconButton>
  );
}

export default PlayButton;
