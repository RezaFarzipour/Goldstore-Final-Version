import React, {  useState } from "react";
import {  useNavigate } from "react-router-dom";
import { checkOtp } from "../../../services/auth";
import { getCookie, setCookie } from "../../../utils/cookie";
import Alerts from "../../element/AlertElement";
import AuthLayout from "../../containers/layout/authLayout";
import VerifyCodeBoxInput from "../../modules/authModules/VerifyCodeBoxInput";


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
    <>
      <AuthLayout>
        {!!alertHandler.text && (
          <Alerts text={alertHandler.text} severity={alertHandler.severity} />
        )}

        <VerifyCodeBoxInput
          verifyCode={verifyCode}
          setVerifyCode={setVerifyCode}
          token={token}
          loading={loading}
          handleVerifyCode={handleVerifyCode}
        />
      </AuthLayout>
    </>
  );
};

export default VerifyCodePage;
