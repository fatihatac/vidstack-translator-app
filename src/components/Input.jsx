import React from "react";
import { Button } from "@mui/material";

function Input({ type, fileType, accept, onChange }) {
  return (
    <>
      <Button component="label" variant="outlined" sx={{ margin: "1rem" }}>
        Upload {fileType}
        <input type={type} accept={accept} onChange={onChange} hidden />
      </Button>
    </>
  );
}

export default Input;
