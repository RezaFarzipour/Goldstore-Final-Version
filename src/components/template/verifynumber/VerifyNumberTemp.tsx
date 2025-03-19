import React, { useState } from "react";
import { ContentGrid, MainGrid } from "./style";
import { Grid2, Paper } from "@mui/material";
import signupImage from "../../../assets/images/pexels-michael-steinberg-321464.jpg";


import { sendOtp } from "../../../services/auth";
import { setCookie } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";
import VerifyNumberBoxInput from "../../modules/authModules/VerifyNumberBoxInput";
import { Rtl } from "../../element/rtl";

const VerifyNumberPage: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const { response, err } = await sendOtp(phoneNumber);

    if (response) {
      setCookie("phone-number", phoneNumber);
      navigate("/verifycode");
    }

    if (err) {
      console.log(err);
    }
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
          <VerifyNumberBoxInput
            submitHandler={submitHandler}
            setPhoneNumber={setPhoneNumber}
            phoneNumber={phoneNumber}
            loading={loading}
          />
        </Grid2>
      </Grid2>
    </Rtl>
  );
};

export default VerifyNumberPage;
