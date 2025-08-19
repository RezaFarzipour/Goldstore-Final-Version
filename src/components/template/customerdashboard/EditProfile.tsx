import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { signupInputs } from "../../../constants/data";
import { SignupFormValues } from "../../../schemas/signupInfoSchema";
import { signupinfostyle } from "../signupInfoStyle";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../styles/theme";
import { Rtl } from "../../element/Rtl";
import { useQueryClient } from "@tanstack/react-query";
import {
  GetUserData,
  UpdateUserProfile,
} from "../../../services/customerDashboard";
import {
  EditProfileFormValues,
  editProfileSchema,
} from "../../../schemas/editProfileSchema";
import { useToast } from "../../../context/ToastProvider";
import CircularLoading from "../../element/CircularLoading";

const EditProfile = () => {
  const navigate = useNavigate();
  document.cookie =
    "is_fully_registered=true; path=/; max-age=" +
    60 * 60 * 24 * 7 +
    "; Secure; SameSite=Strict";
  interface inputStateProps {
    first_name: string;
    last_name: string;
    national_code: string;
    email: string;
  }

  const queryClient = useQueryClient();
  const { showToast } = useToast();

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

  const { mutateAsync, isPending: updating } = useMutation({
    mutationKey: ["editprofile"],
    mutationFn: UpdateUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usersInfo"] });
    },
  });

  const { data: UserData, isPending } = useQuery({
    queryKey: ["usersInfo"],
    queryFn: GetUserData,
  });

  const submitHandler = async (data: EditProfileFormValues) => {
    const response = await mutateAsync(data);

    if (response && response.status === 200) {
      showToast("اطلاعات با موفقیت ویرایش شد", "success");
      navigate("/customerdashboard/");
    } else {
      showToast("خطایی رخ داده است", "error");
    }
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileFormValues>({
    defaultValues: {
      first_name: UserData?.data?.first_name,
      last_name: UserData?.data?.last_name,
      national_code: UserData?.data?.phone_number,
      email: UserData?.data?.email,
    },
    resolver: zodResolver(editProfileSchema),
    mode: "onTouched",
  });

  useEffect(() => {
    if (UserData?.data) {
      const { first_name, last_name, email, national_code } = UserData.data;

      reset({
        first_name,
        last_name,
        email,
        national_code,
      });
    }
  }, [UserData, reset]);

  if (isPending) {
    return <CircularLoading />;
  }
  return (
    <Rtl>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 2,
          px: 2,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            maxWidth: 500,
            width: "100%",
            backgroundColor: "#35352E",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          }}
        >
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
              <Box sx={{ p: 2, minWidth: "300px" }} key={item.id}>
                <TextField
                  error={!!errors[item.name as keyof SignupFormValues]}
                  helperText={
                    errors[item.name as keyof SignupFormValues]
                      ?.message as string
                  }
                  {...register(item.name as keyof SignupFormValues)}
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
              onClick={handleSubmit(submitHandler)}
            >
              {updating ? "در حال بروزرسانی" : "تایید"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Rtl>
  );
};

export default EditProfile;
