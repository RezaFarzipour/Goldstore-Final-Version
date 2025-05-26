import React, {  useState } from "react";
import {  useNavigate } from "react-router-dom";
import { checkOtp } from "../../../services/auth";
import { getCookie, setCookie } from "../../../utils/cookie";
import Alerts from "../../element/AlertElement";
import AuthLayout from "../../containers/layout/authLayout";
import VerifyCodeBoxInput from "../../modules/authModules/VerifyCodeBoxInput";
import { useToast } from "../../../context/ToastProvider";


const VerifyCodePage = () => {
  const [verifyCode, setVerifyCode] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);
  const { showToast } = useToast();


  const navigate = useNavigate();
  const token = getCookie("phone-number");

  const handleVerifyCode = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const { response, err } = await checkOtp(token, verifyCode);
    console.log("res",response);

    if (response && response.status === 200) {
      showToast("به سامانه ی طلای تهران خوش آمدید","success")
      setCookie("token", response.data.token);
      setCookie("user_type", response.data.user_type);
     

      if (response.data.signup_require) {
        navigate("/signupinfo");
        return;
      } else if (
        response.data.user_type === "customer" &&
        !response.data.signup_require
      ) {
        navigate("/customerdashboard/");
        return;
      } else if (
        response.data.user_type === "admin" &&
        !response.data.signup_require
      ) {
        navigate("/admin/inventory");
        return;
      }
    } else if (err) {
      showToast("خطایی رخ داده است","error")
      setLoading(false);
      return;
    
    }
  };





  return (
    <>
      <AuthLayout>
      

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
