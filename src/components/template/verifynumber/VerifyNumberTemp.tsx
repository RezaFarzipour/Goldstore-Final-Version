import React, { useState } from "react";
import { sendOtp } from "../../../services/auth";
import { setCookie } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";
import VerifyNumberBoxInput from "../../modules/authModules/VerifyNumberBoxInput";
import AuthLayout from "../../containers/layout/authLayout";

const VerifyNumberPage: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const { response, err } = await sendOtp(phoneNumber);

    if (response && response.status === 200) {
      setCookie("phone-number", phoneNumber);
      navigate("/verifycode");
    }

    if (err) {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <VerifyNumberBoxInput
        submitHandler={submitHandler}
        setPhoneNumber={setPhoneNumber}
        phoneNumber={phoneNumber}
        loading={loading}
      />
    </AuthLayout>
  );
};

export default VerifyNumberPage;
