import React, { useState } from "react";
import { ButtonBox, ContentGrid, FirstBox, MainGrid } from "./style";
import {
  Avatar,
  Box,
  createTheme,
  Grid2,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import signupimage from "../../../assets/images/pexels-michael-steinberg-321464.jpg";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
//import axios from "axios";

import VerifyInput from "../../element/verify_number_code_input";
import VerifyButton from "../../element/verify-number-code-button";
const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const VerifyNumberPage: React.FC = () => {
  const [phone_number, setPhone_number] = useState<string>("");

  // const [cookies, setCookie] = useCookies(["phone-number"]);
  const [loading, setLoading] = useState<boolean>(false);

  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //   setLoading(true);

    //   axios({
    //     method: "GET",
    //     url: `${IPServer}/Authentication/send-code/phone-number=${phone_number}/`,
    //   })
    //     .then((res) => {

    //       setCookie("phone-number", phone_number, {
    //         path: "/",
    //       });
    //       router.push("/VerifyCode");
    //     })
    //     .catch((err) => {console.log(err);});
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Grid2 container sx={MainGrid(signupimage)}>
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
                  label={"شماره موبایل"}
                  onchangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPhone_number(e.target.value)
                  }
                />
              </Box>

              <Box sx={ButtonBox}>
                <VerifyButton
                  state={{type:"phone",value:phone_number}}
                  submitHandler={submitHandler}
                  loading={loading}
                />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default VerifyNumberPage;
