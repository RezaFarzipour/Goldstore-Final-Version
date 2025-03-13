import { TextField } from "@mui/material";
import React from "react";
import { verifyInput_style } from "./style";

interface VerifyInputProps {
  label: string;
  onchangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VerifyInput: React.FC<VerifyInputProps> = ({
  label,
  onchangeHandler,
}) => {
  return (
    <TextField
      onChange={onchangeHandler}
      sx={verifyInput_style}
      margin="normal"
      fullWidth
      id="number"
      label={label}
      autoFocus
    />
  );
};

export default VerifyInput;
