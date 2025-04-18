import AuthLayout from "../containers/layout/authLayout";
import { signupInputs } from "../../constants/data";
import { Box, Button, TextField, Typography } from "@mui/material";
import { colors } from "../../styles/theme";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signupinfo } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { signupinfostyle } from "./signupInfoStyle";
const SignupInfoTemp = () => {

const navigate = useNavigate()

  interface inputStateProps {
    first_name: string;
    last_name: string;
    national_code: string;
    email: string;
  }

  const [inputInfo, setInputInfo] = useState<inputStateProps>({
    first_name: "",
    last_name: "",
    national_code: "",
    email: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputInfo({ ...inputInfo, [name]: value });
  };

const {mutateAsync ,error} = useMutation({
    mutationKey:["signupinfo"],
    mutationFn:signupinfo
})

const submitHandler =async()=>{
   const response = await mutateAsync(inputInfo);
   if(response && response.status === 200){
       console.log(response.data.responseFA);
       navigate("/customerdashboard/")
   }else{
       console.log(error);
   }

}

  return (
    <AuthLayout>
      <Box
        sx={{
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: "400",
            color: colors.grey[900],
          }}
        >
          اطلاعات کاربر
        </Typography>
        {signupInputs.map((item) => (
          <Box sx={{ p: 2 }} key={item.id}>
            <TextField
              onChange={changeHandler}
              variant="standard"
              sx={signupinfostyle}
              name={item.name}
              label={item.label}
            />
          </Box>
        ))}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: "#FFC436",
            color: "#111",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "rgba(204, 163, 69,0.7)" },
          }}
        onClick={submitHandler}
        >
          تایید
        </Button>
      </Box>
    </AuthLayout>
  );
};

export default SignupInfoTemp;
