import { Button } from "@mui/material";
import React from "react";
import { verify_number_style } from "./verifybutton_style";
import CircularIndeterminate from "./CircularProgress";

interface VerifyButtonProps {
  state: { type: "phone" | "code"; value: string };
  submitHandler: (e: React.FormEvent<HTMLButtonElement>) => void;
  loading: boolean;
}

const VerifyButton: React.FC<VerifyButtonProps> = ({
  state,
  submitHandler,
  loading,
}) => {
  return (
    <Button
      disabled={
        (state.type === "phone" && state.value.length < 11) ||
        (state.type === "code" && state.value.length < 6)
      }
      type="submit"
      fullWidth
      variant="contained"
      sx={
       verify_number_style
        
      }
      onClick={submitHandler}
    >
      {loading ? <CircularIndeterminate color="#222" /> : "ادامه"}
    </Button>
  );
};

export default VerifyButton;
