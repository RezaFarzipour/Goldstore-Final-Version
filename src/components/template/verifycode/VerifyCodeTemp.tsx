import React, { useState } from "react";
import { Button, Paper, Box, Typography, Grid2 } from "@mui/material";
import VerifyCodeImage from "../../../assets/images/pexels-michael-steinberg-321464.jpg";
import { InnerGrid, MainVerifyBox, VerifyMainGrid } from "./style";
import { Link, useNavigate } from "react-router-dom";
import VerifyInput from "../../element/auth/verifyNumberCode-input";
import VerifyButton from "../../element/auth/verifyNumberCode-button";
import EditIcon from "@mui/icons-material/Edit";
import { checkOtp } from "../../../services/auth";
import { getCookie, setCookie } from "../../../utils/cookie";
import { Rtl } from "../../element/rtl";
import Alerts from "../../element/AlertElement";

const VerifyCodePage = () => {
  const [verifyCode, setVerifyCode] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);
  const [alertHandler, setAlertHandler] = useState({
    severity: "",
    text: "",
  });

  const navigate = useNavigate();
  const token = getCookie("phone-number");

  const handleVerifyCode = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const { response, err } = await checkOtp(token, verifyCode);

    if (response && response.status === 200) {
      setCookie("token", response.data.token);
      setCookie("user_type", response.data.user_type);
      setAlertHandler({
        text: "ورود موفقیت آمیز ",
        severity: "success",
      });

      if (response.data.signup_require) {
        navigate("/signupinfo");
      } else if (
        response.data.user_type === "customer" &&
        !response.data.signup_require
      ) {
        navigate("/customerdashboard/");
      } else if (
        response.data.user_type === "admin" &&
        !response.data.signup_require
      ) {
        navigate("/admin/inventory");
      }
    } else if (err) {
      setLoading(false);
      setAlertHandler({
        text: "خطایی رخ داده است یا کد ورود  اشتباه است",
        severity: "error",
      });
    }
  };

  return (
    <Rtl>
      <Grid2 container sx={VerifyMainGrid(VerifyCodeImage)}>
        {!!alertHandler.text && (
          <Alerts text={alertHandler.text} severity={alertHandler.severity} />
        )}
        <Grid2
          sx={InnerGrid}
          size={{ xs: 12, sm: 8, md: 5 }}
          component={Paper}
          elevation={6}
          square
        >
          <Box sx={MainVerifyBox}>
            <Box display={"flex"} alignItems={"center"} mb={5}>
              <Typography fontSize={"13px"}  color="#fff">
                کد تایید برای شماره موبایل{token} ارسال گردید
              </Typography>

              <Link  to="/signup">
                <EditIcon sx={{fontSize:"16px",color:"#111"}}/>
              </Link>
            </Box>
            <Typography color="#fff" component="h1">
              کد تایید را وارد کنید
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1, width: { xs: "70%", md: "50%" } }}
            >
              <VerifyInput
                label=" کد تایید "
                onchangeHandler={(e) => setVerifyCode(e.target.value)}
              />
            </Box>

            <Box width="30%" display="flex" justifyContent="center">
              <VerifyButton
                state={{ type: "code", value: verifyCode }}
                submitHandler={handleVerifyCode}
                loading={loading}
              />
            </Box>

            {/* <Box
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
              <Link to="/signup">
                <Button variant="text" sx={EditNumberBtn}>
                  ویرایش شماره همراه
                </Button>
              </Link>
            </Box> */}
          </Box>
        </Grid2>
      </Grid2>
    </Rtl>
  );
};

export default VerifyCodePage;
