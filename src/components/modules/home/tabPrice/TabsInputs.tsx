import React from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Typography,
} from "@mui/material";
import { FormControlPaper, FormControlStyle } from "./style";

// Define the props type for the FormInput component
interface FormInputProps {
  label: string; // Label text for the input
  value: string | number; // Value of the input field
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for input changes
  adornmentText: string; // Text to display in the input adornment
}

// Functional Component with TypeScript
const TabsInputs: React.FC<FormInputProps> = ({
  label,
  value,
  onChange,
  adornmentText,
}) => {
  return (
    <Paper sx={FormControlPaper}>
      <FormControl sx={FormControlStyle} onChange={onChange}>
        <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
        <OutlinedInput
          value={value}
          id="outlined-adornment-amount"
          endAdornment={
            <InputAdornment position="start">
              <Typography sx={{ color: "#fff" }}>{adornmentText}</Typography>
            </InputAdornment>
          }
          label="Amount"
        />
      </FormControl>
    </Paper>
  );
};

export default TabsInputs;
