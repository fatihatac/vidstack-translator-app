import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Input({ type, fileType, accept, onChange }) {
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
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        sx={{ margin: "1rem" }}
        startIcon={<CloudUploadIcon />}
      >
        Upload files
        <VisuallyHiddenInput type={type} onChange={onChange} multiple />
      </Button>
      {/* <Button component="label" variant="outlined" sx={{ margin: "1rem" }}>
        Upload {fileType}
        <input type={type} accept={accept} onChange={onChange} hidden />
      </Button> */}
    </>
  );
}

export default Input;
