import React from "react";

import { Box, Typography } from "@mui/material";
import VerifyInput from "../../element/auth/verifyNumberInput";
import VerifyButton from "../../element/auth/verifyNumberButton";
import Logo from "../../../assets/images/logo.png";
import { ButtonBox, FirstBox } from "./style";
import { useForm } from "react-hook-form";
import { PhoneFormData, phoneSchema } from "../../../schemas/phoneSchema";
import { zodResolver } from "@hookform/resolvers/zod";
interface VerifyNumberBoxInputProps {
  setPhoneNumber: (value: string) => void;
  phoneNumber: string;
  onSubmit: (data: PhoneFormData) => void;
  loading: boolean;
}

const VerifyNumberBoxInput = ({
  setPhoneNumber,
  phoneNumber,
  onSubmit,
  loading,
}: VerifyNumberBoxInputProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PhoneFormData>({
    resolver: zodResolver(phoneSchema),
    mode: "onTouched",
  });

  const phoneValue = watch("phone");
  React.useEffect(() => {
    setPhoneNumber(phoneValue);
  }, [phoneValue]);

  return (
    <Box sx={FirstBox}>
      <Box
        mb={1}
        component="img"
        src={Logo}
        sx={{
          width: {
            xs: "60%",
            md: "40%",
          },
          height: "auto",
        }}
      />

      <Typography
        fontSize={{ xs: "14px", md: "18px" }}
        whiteSpace={"nowrap"}
        mb={5}
        color="#fff"
        variant="h6"
        fontWeight="200"
      >
        طلای تهران
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ width: { xs: "80%", md: "100%" } }}>
          <Typography
            fontSize={{ xs: "14px", md: "18px" }}
            textAlign={"left"}
            color="#fff"
            fontWeight="600"
            variant="h6"
          >
            ورود | ثبت نام
          </Typography>

          <VerifyInput
         register={register("phone")}
            label="شماره موبایل"
            errorMessage={errors.phone?.message}
     
            
          />
          <Typography
            mt={1}
            fontSize={{ xs: "11px", md: "14px" }}
            textAlign={"left"}
            color="#fff"
            fontWeight="200"
          >
            مالکیت شماره موبایل بنام خودتان باشد
          </Typography>
        </Box>

        <Box sx={ButtonBox}>
          <VerifyButton
            state={{ type: "phone", value: phoneNumber }}
            loading={loading}
          />
        </Box>
      </form>
    </Box>
  );
};

export default VerifyNumberBoxInput;
