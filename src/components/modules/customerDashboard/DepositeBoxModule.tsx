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
import { priceSeptrator } from "../../../utils/numberFormatter";
import { colors } from "../../../styles/theme";

type DepositeBoxProps = {
  buttonValue: string;
  display: string;
};

const DepositeBox = ({ buttonValue, display }: DepositeBoxProps) => {
  const [textFieldValue, setTextFieldValue] = React.useState("");
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
        <Button variant="outlined" sx={ButtononeSx}>
          {buttonValue}
        </Button>
      </Box>

      <Box display={display}>
        <Typography  sx={{ color: colors.primary[400],textAlign:"center" ,fontWeight:500}}>
          <span style={{ color: "rgb(255,172,25)",marginLeft:"6px" }}>موجودی کیف پول:</span>
          <span>
            {/* {numeral(props.WalletData.wallet_money_data).format("0,0")} */}
            {priceSeptrator(5657565)}
            &nbsp;ریال
          </span>
        </Typography>
      </Box>
    </Paper>
  );
};

export default DepositeBox;
