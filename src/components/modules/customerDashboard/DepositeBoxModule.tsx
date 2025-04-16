import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  ButtononeSx,
  TextFildOneSx,
} from "../../template/customerdashboard/style";
import {
  priceSeptrator,
  toPersianDigits,
} from "../../../utils/numberFormatter";
import { colors } from "../../../styles/theme";

type DepositeBoxProps = {
  buttonValue: string;
  display: string;
  headerContent: string;
  footerContent: string;
  unit: string;
  walletBalance?: number;
  walletGoldBalance?: number;
  assetAmountChanger: (value: string) => void;
  assetAmount: string;
  submit: (assetAmount: string) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isPending: boolean;
};

const DepositeBox = ({
  headerContent,
  footerContent,
  buttonValue,
  unit,
  display,
  assetAmount,
  assetAmountChanger,
  submit,
  isPending,
  walletBalance = 0,
  walletGoldBalance,
  handleChange,
}: DepositeBoxProps) => {
  const submitHandler = () => {
    submit(assetAmount);
    assetAmountChanger("");
  };

  return (
    <Paper
      sx={{
        bgcolor: "#272523",
        width: "100%",
        borderRadius: "10px",
        height: "290px",
        px: 10,
      }}
    >
      <Typography
        sx={{ color: "#fff", textAlign: "start", fontSize: "20px", py: 3 }}
      >
        {headerContent}
      </Typography>

      <TextField
        id="outlined-start-adornment"
        sx={TextFildOneSx}
        InputProps={{
          endAdornment: (
            <InputAdornment
              sx={{
                "& .MuiTypography-root": {
                  color: "#fff",
                },
              }}
              position="start"
            >
              {unit}
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        value={assetAmount}
      />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined" sx={ButtononeSx} onClick={submitHandler}>
          {isPending ? "در حال برداشت..." : buttonValue}
        </Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }} display={display}>
        <Typography
          sx={{
            color: colors.primary[400],
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          <span style={{ color: "rgb(255,172,25)", marginLeft: "6px" }}>
            {footerContent}
          </span>
          <span>
            {walletBalance !== undefined &&
              toPersianDigits(priceSeptrator(walletBalance))}
            {walletGoldBalance !== undefined &&
              toPersianDigits(walletGoldBalance)}
            &nbsp;{unit}
          </span>
        </Typography>
      </Box>
    </Paper>
  );
};

export default DepositeBox;
