import React from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import { colors } from "../../../styles/theme";
import { FormCntrolSx, PaperSX } from "./formControlStyle";

type BuyAndSellFormControlProps = {
  total: string;
  textFieldValue: string;
  unit: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BuyAndSellFormControl = ({
  total,
  textFieldValue,
  unit,
  handleChange,
}: BuyAndSellFormControlProps) => {
  return (
    <Paper sx={PaperSX}>
      <FormControl sx={FormCntrolSx} onChange={handleChange}>
        <InputLabel htmlFor="outlined-adornment-amount">{total}</InputLabel>
        <OutlinedInput
          value={textFieldValue}
          id="outlined-adornment-amount"
          endAdornment={
            <InputAdornment
              sx={{
                "& .MuiTypography-root": {
                  color: colors.primary[400],
                },
              }}
              position="start"
            >
              {unit}
            </InputAdornment>
          }
          label="Amount"
        />
      </FormControl>
    </Paper>
  );
};

export default BuyAndSellFormControl;
