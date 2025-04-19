import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { priceSeptrator, toPersianDigits } from "../../utils/numberFormatter";
import { colors } from "../../styles/theme";

type DepositeBoxProps = {
  buttonValue: string;
  display?: "flex" | "none";
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
  display = "flex",
  assetAmount,
  assetAmountChanger,
  submit,
  isPending,
  walletBalance,
  walletGoldBalance,
  handleChange,
}: DepositeBoxProps) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const submitHandler = async () => {
    await submit(assetAmount);
    assetAmountChanger("");
  };

  return (
    <Paper
      sx={{
        bgcolor: theme.palette.grey[900],
        width: "100%",
        borderRadius: 2,
        p: isMobile ? 3 : 5,
        height: 290,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ color: "#fff", fontSize: 20 }}>
        {headerContent}
      </Typography>

      <TextField
        type="text"
        inputMode="numeric"
        pattern="\d*"
        placeholder="مقدار را وارد کنید"
        sx={{
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            bgcolor: theme.palette.grey[800],
            color: "#fff",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Typography sx={{ color: "#fff" }}>{unit}</Typography>
            </InputAdornment>
          ),
        }}
        value={assetAmount}
        onChange={handleChange}
      />

      <Button
        variant="outlined"
        sx={{
          borderColor: colors.gold[100],
          color: colors.gold[100],
          fontWeight: "bold",
          mt: 2,
          "&:hover": {
            borderColor: colors.gold[100],
          },
        }}
        onClick={submitHandler}
        disabled={isPending}
      >
        {isPending ? "در حال ثبت..." : buttonValue}
      </Button>

      {(walletBalance !== undefined || walletGoldBalance !== undefined) && (
        <Box sx={{ display, justifyContent: "center", mt: 2 }}>
          <Typography
            sx={{
              color: colors.gold[100],
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            <span style={{ color: "#efefee", marginLeft: 6 }}>
              {footerContent}
            </span>
            <span>
              {walletBalance !== undefined &&
                `${toPersianDigits(priceSeptrator(walletBalance))} ${unit}`}
              {walletGoldBalance !== undefined &&
                ` (${toPersianDigits(walletGoldBalance)} گرم)`}
            </span>
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default DepositeBox;
