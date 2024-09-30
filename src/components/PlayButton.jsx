import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";

function PlayButton({ onClick, disabled }) {
  return (
    <Tooltip title="Load Player">
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
    </Tooltip>
  );
}

export default PlayButton;
