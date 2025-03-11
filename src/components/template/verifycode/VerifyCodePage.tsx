import React from "react";
import Button from "@mui/material/Button";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import VerifyCodeImage from "../../../assets/images/pexels-michael-steinberg-321464.jpg";
import { useCookies } from "react-cookie";

import axios from "axios";
//import { IPServer } from "@/Config";

import {
  EditNumberBtn,
  InnerGrid,
  MainVerifyBox,
  VerifyMainGrid,
} from "./style";
import { Link } from "react-router-dom";
import { Grid2 } from "@mui/material";
import VerifyInput from "../../element/verify_number_code_input";
import VerifyButton from "../../element/verify-number-code-button";

const themee = createTheme({
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const VerifyCodePage = () => {
  const [cookies, setCookie] = useCookies<string>(["phone-number"]);
  const [verify_code, setVerify_code] = React.useState<string>("");
  const [phone_number2, setPhone_number2] = React.useState(
    cookies["phone-number"]
  );
  const [loading, setLoading] = React.useState(false);

  const verifyCodehandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // setLoading(true);
    // axios
    //   .post(`${IPServer}/Authentication/prove-auth-code/`, {
    //     phone_number: phone_number2,
    //     code: verify_code,
    //   })
    //   .then((res) => {
    //     setCookie("token", res.data.token, {
    //       path: "/",
    //     });
    //     setCookie("user_type", res.data.user_type, {
    //       path: "/",
    //     });
    //     console.log(res.data);

    //     if (res.data.signup_require) {
    //       router.push("/SignUpInfo");
    //     } else if (
    //       res.data.user_type === "customer" &&
    //       !res.data.signup_require
    //     ) {
    //       router.push("/DeskPage");
    //     } else if (
    //       res.data.user_type === "admin" &&
    //       !res.data.signup_require
    //     ) {
    //       router.push("/CashAmountAdmin");
    //     }
    //   });
  };
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={themee}>
        <Grid2 container sx={VerifyMainGrid(VerifyCodeImage)}>
          <Grid2
            sx={InnerGrid}
            size={{ xs: 12, sm: 8, md: 5 }}
            component={Paper}
            elevation={6}
            square
          >
            <Box sx={MainVerifyBox}>
              <Typography
                color="#fff"
                fontFamily="Lalezar"
                component="h1"
                variant="h5"
              >
                کد تایید را وارد کنید
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 1, width: { xs: "70%", md: "50%" } }}
              >
                <VerifyInput
                  label=" کد تایید "
                  onchangeHandler={(e) => setVerify_code(e.target.value)}
                />
              </Box>

              <Box width="30%" display={"flex"} justifyContent={"center"}>
                <VerifyButton
                  state={{ type: "code", value: verify_code }}
                  submitHandler={verifyCodehandler}
                  loading={loading}
                />
              </Box>

              <Box
                sx={{
                  mt: 2,
                  px: 1,
                  bgcolor: "#F1AB1F",
                  borderRadius: "10px",
                  "&:hover": { bgcolor: "#d3961b" },
                  width: { xs: "45%", md: "30%" },
                  textAlign: "center",
                }}
              >
                <Link to={"/signup"}>
                  <Button variant="text" sx={EditNumberBtn}>
                    {" "}
                    ویرایش شماره همراه
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default VerifyCodePage;
