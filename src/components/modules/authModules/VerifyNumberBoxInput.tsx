import React from 'react'
import { ButtonBox, FirstBox } from '../../template/verifynumber/style'
import { Avatar, Box, Typography } from '@mui/material'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VerifyInput from '../../element/auth/verifyNumberCode-input';
import VerifyButton from '../../element/auth/verifyNumberCode-button';

interface VerifyNumberBoxInputProps {
    setPhoneNumber: (value: string) => void;
    phoneNumber: string;
    submitHandler: (event: React.FormEvent<HTMLButtonElement>) => void;
    loading: boolean;
  }

const VerifyNumberBoxInput = ({setPhoneNumber,phoneNumber,submitHandler,loading}:VerifyNumberBoxInputProps) => {
  return (
    <Box sx={FirstBox}>
            <Avatar sx={{ m: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              color="#fff"
              fontFamily="Lalezar"
              component="h1"
              variant="h5"
            >
              ورود | ثبت نام
            </Typography>

            <Box sx={{ width: { xs: "70%", md: "50%" } }}>
              <VerifyInput
                label="شماره موبایل"
                onchangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhoneNumber(e.target.value)
                }
              />
            </Box>

            <Box sx={ButtonBox}>
              <VerifyButton
                state={{ type: "phone", value: phoneNumber }}
                submitHandler={submitHandler}
                loading={loading}
              />
            </Box>
          </Box>
  )
}

export default VerifyNumberBoxInput