import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Tooltip from "@mui/joy/Tooltip";

function Input({ type, title, accept, onChange, endIcon, fileName }) {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  return (
    <>
      <Tooltip title={title} color="success">
        <Button
          component="label"
          size=""
          role={undefined}
          variant="contained"
          tabIndex={-1}
          sx={{ margin: "1rem" }}
          startIcon={<FileUploadIcon fontSize="large" />}
          endIcon={endIcon}
        >
          <VisuallyHiddenInput
            type={type}
            accept={accept}
            onChange={onChange}
            multiple
          />
        </Button>
      </Tooltip>
      <div className="file-name">{fileName ? fileName : "No file chosen"}</div>
      {/* <Button component="label" variant="outlined" sx={{ margin: "1rem" }}>
        Upload {fileType}
        <input type={type} accept={accept} onChange={onChange} hidden />
      </Button> */}
    </>
  );
}

export default Input;
