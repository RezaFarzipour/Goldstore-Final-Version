import { TextField } from "@mui/material";
import { verifyInput_style } from "./style";
import {  UseFormRegisterReturn } from "react-hook-form";

interface VerifyInputProps {
  label: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

const VerifyInput = ({
  label,
  register,
  errorMessage,
} : VerifyInputProps) => {
  return (
    <TextField
    {...register}
      sx={verifyInput_style}
      margin="normal"
      fullWidth
      id="number"
      label={label}
      autoFocus
      error={!!errorMessage}
      helperText={errorMessage}
    />
  );
};

export default VerifyInput;
