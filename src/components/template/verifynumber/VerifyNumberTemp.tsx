import React, { useState } from "react";
import { ButtonBox, ContentGrid, FirstBox, MainGrid } from "./style";
import { Avatar, Box, Grid2, Paper, Typography } from "@mui/material";
import signupImage from "../../../assets/images/pexels-michael-steinberg-321464.jpg";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import VerifyInput from "../../element/auth/verifyNumberCode-input";
import VerifyButton from "../../element/auth/verifyNumberCode-button";
import Rtl from "../../element/rtl";

const VerifyNumberPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <Rtl>
      <Grid2 container sx={MainGrid(signupImage)}>
        <Grid2
          sx={ContentGrid}
          size={{ xs: 12, sm: 8, md: 5 }}
          component={Paper}
          elevation={6}
          square
        >
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
        </Grid2>
      </Grid2>
    </Rtl>
  );
};

export default VerifyNumberPage;
