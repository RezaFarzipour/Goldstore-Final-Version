import {
  Alert,
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
import { priceSeptrator } from "../../../utils/numberFormatter";
import { colors } from "../../../styles/theme";
import { useMutation } from "@tanstack/react-query";
import { customerWithdraw } from "../../../services/customerDashboard";
import CustomAlert from "../../element/CustomAlert";
import ToastMessage from "../../element/CustomAlert";

type DepositeBoxProps = {
  buttonValue: string;
  display: string;
  walletBalance: number | undefined;
};

const DepositeBox = ({
  buttonValue,
  display,
  walletBalance = 0,
}: DepositeBoxProps) => {
  const [textFieldValue, setTextFieldValue] = React.useState<string>("");

  const { mutate, isPending } = useMutation({
    mutationFn: (moneyAmount: string) => customerWithdraw(moneyAmount),
    onSuccess: (data) => {
      console.log("درخواست موفق بود:", data);
      <ToastMessage message={data.message} type="success" />;
    },
    onError: (error) => {
      console.error("خطا در درخواست:", error);
      <ToastMessage message={error.message} type="error" />;
    },
  });

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
      <Typography sx={{ color: "#fff", fontSize: "20px", py: 3 }}>
        مبلغ را وارد کنید:
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
              ریال
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          const value = e.target.value.replace(/,/g, ""); // حذف کاماها از ورودی
          setTextFieldValue(priceSeptrator(Number(value)));
        }}
        value={textFieldValue}
      />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          disabled={isPending}
          onClick={() => mutate(textFieldValue)}
          variant="outlined"
          sx={ButtononeSx}
        >
          {buttonValue}
        </Button>
      </Box>

      <Box display={display}>
        <Typography
          sx={{
            color: colors.primary[400],
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          <span style={{ color: "rgb(255,172,25)", marginLeft: "6px" }}>
            موجودی کیف پول:
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
