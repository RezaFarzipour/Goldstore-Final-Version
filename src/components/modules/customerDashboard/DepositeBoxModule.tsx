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
  FarsiToEnglishNumber,
  priceSeptrator,
} from "../../../utils/numberFormatter";
import { colors } from "../../../styles/theme";
import { WalletDataResponse } from "../../../types";

type DepositeBoxProps = {
  buttonValue: string;
  display: string;
  headerContent: string;
  footerContent: string;
  unit: string;
  walletBalance?: number;
  assetAmountChanger: (value: string) => void;
  assetAmount: string;
  submit: (assetAmount: string) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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
  handleChange,
}: DepositeBoxProps) => {
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
        <Button
          variant="outlined"
          sx={ButtononeSx}
          onClick={() => submit(assetAmount)}
        >
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
            {/* {numeral(props.WalletData.wallet_money_data).format("0,0")} */}
            {priceSeptrator(walletBalance)}
            &nbsp;ریال
          </span>
        </Typography>
      </Box>
    </Paper>
  );
};

export default DepositeBox;
