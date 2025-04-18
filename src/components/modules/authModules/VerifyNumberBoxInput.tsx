import React from "react";

import { Box, Typography } from "@mui/material";
import VerifyInput from "../../element/auth/verifyNumberCode-input";
import VerifyButton from "../../element/auth/verifyNumberCode-button";
import Logo from "../../../assets/images/logo.png";
import { ButtonBox, FirstBox } from "./style";
interface VerifyNumberBoxInputProps {
  setPhoneNumber: (value: string) => void;
  phoneNumber: string;
  submitHandler: (event: React.FormEvent<HTMLButtonElement>) => void;
  loading: boolean;
}

const VerifyNumberBoxInput = ({
  setPhoneNumber,
  phoneNumber,
  submitHandler,
  loading,
}: VerifyNumberBoxInputProps) => {
  return (
    <Box sx={FirstBox}>
     <Box
     mb={1}
  component="img"
  src={Logo}
  sx={{
    width: {
      xs: '60%',
      md:"40%"  

    },
    height: 'auto',
  }}
/>

      <Typography fontSize={{xs:"14px",md:"18px"}} whiteSpace={"nowrap"} mb={5} color="#fff" variant="h6" fontWeight="200">
        طلای تهران
      </Typography>

      <Box sx={{ width: { xs: "80%", md: "100%" } }}>
        <Typography
        fontSize={{xs:"14px",md:"18px"}} 
          textAlign={"left"}
          color="#fff"
          fontWeight="600"
          variant="h6"
        >
          ورود | ثبت نام
        </Typography>
        <VerifyInput
          label="شماره موبایل"
          onchangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhoneNumber(e.target.value)
          }
        />
        <Typography
        mt={1}
        fontSize={{xs:"11px",md:"14px"}} 
          textAlign={"left"}
          color="#fff"
          fontWeight="200"
     
        >
          مالکیت شماره موبایل بنام خودتان باشد
        </Typography>
      </Box>

      <Box sx={ButtonBox}>
        <VerifyButton
          state={{ type: "phone", value: phoneNumber }}
          submitHandler={submitHandler}
          loading={loading}
        />
      </Box>
    </Box>
  );
};

export default VerifyNumberBoxInput;
