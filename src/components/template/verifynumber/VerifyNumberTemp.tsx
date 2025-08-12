import React, { useState } from "react";
import { sendOtp } from "../../../services/auth";
import { setCookie } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";
import VerifyNumberBoxInput from "../../modules/authModules/VerifyNumberBoxInput";
import AuthLayout from "../../containers/layout/authLayout";
import { PhoneFormData } from "../../../schemas/phoneSchema";
import { useToast } from "../../../context/ToastProvider";

const VerifyNumberPage: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { showToast } = useToast();

  const onSubmit = async (data: PhoneFormData) => {
    setLoading(true);
    const { response, err } = await sendOtp(data.phone);

    console.log("response", response);

    if (response && response.status === 200) {
      const code = response.data?.code;
      showToast(`کد شما: ${code}`, "success");
      setCookie("phone-number", phoneNumber);
      navigate("/verifycode");
    }

    if (err) {
      setLoading(false);
      showToast("خطایی رخ داده است", "error");
    }
  };

  return (
    <AuthLayout>
      <VerifyNumberBoxInput
        onSubmit={onSubmit}
        setPhoneNumber={setPhoneNumber}
        phoneNumber={phoneNumber}
        loading={loading}
      />
    </AuthLayout>
  );
};

export default VerifyNumberPage;
