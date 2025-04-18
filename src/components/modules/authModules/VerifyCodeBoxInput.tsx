import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import VerifyInput from "../../element/auth/verifyNumberCode-input";
import VerifyButton from "../../element/auth/verifyNumberCode-button";

import Logo from "../../../assets/images/logo.png";
import { MainVerifyBox, textfeildStyle } from "./style";
import { colors } from "../../../styles/theme";
type VerifyCodeBoxInputProps = {
  token: string | null;
  setVerifyCode: (value: string) => void;
  verifyCode: string;
  loading: boolean;
  handleVerifyCode: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const VerifyCodeBoxInput = ({
  token,
  setVerifyCode,
  verifyCode,
  loading,
  handleVerifyCode,
}: VerifyCodeBoxInputProps) => {
  return (
    <Box sx={MainVerifyBox}>
      <Box
        component="img"
        src={Logo}
        sx={{
          width: {
            xs: "60%",
            md: "40%",
          },
          height: "auto",
        }}
      />

      <Typography
        fontSize={{ xs: "14px", md: "18px" }}
        mb={5}
        color="#fff"
        variant="h6"
        fontWeight="200"
      >
        طلای تهران
      </Typography>
      <Box sx={{ width: { xs: "80%", md: "100%" } }}>
        <Typography
          fontSize={{ xs: "14px", md: "18px" }}
          mb={3}
          textAlign={"left"}
          color="#fff"
          fontWeight="600"
          variant="h6"
        >
          ورود | ثبت نام
        </Typography>

        <Box mb={2}>
          <TextField
            sx={textfeildStyle}
            disabled
            defaultValue={token}
            variant="standard"
          />
        </Box>

        <Typography
          color="#fff"
          fontSize={{ xs: "12px", md: "14px" }}
          fontWeight={200}
        >
          کد ارسال شده به تلفن همراهتان را وارد کنید
        </Typography>

        <VerifyInput
          label=" کد تایید "
          onchangeHandler={(e) => setVerifyCode(e.target.value)}
        />

        <Box mt={1} textAlign={"left"}>
          <Typography
            fontSize={{ xs: "10px" }}
            variant="button"
            component={Link}
            to={"/signup"}
            sx={{ cursor: "pointer" }}
            color={colors.gold[100]}
          >
            {" "}
            شماره تلفن اشتباه است؟
          </Typography>
        </Box>
      </Box>

      <Box width="100%" display="flex" justifyContent="center">
        <VerifyButton
          state={{ type: "code", value: verifyCode }}
          submitHandler={handleVerifyCode}
          loading={loading}
        />
      </Box>
    </Box>
  );
};

export default VerifyCodeBoxInput;
