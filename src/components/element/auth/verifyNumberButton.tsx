import { Button } from "@mui/material";
import React from "react";
import CircularIndeterminate from "../CircularProgress";
import { verifyNumber_style } from "./style";

interface VerifyButtonProps {
  state: { type: "phone" | "code"; value: string };
  loading: boolean;
}

const VerifyButton: React.FC<VerifyButtonProps> = ({
  state,
  loading,
}) => {
  return (
    <Button
    
      disabled={
        (state?.type === "phone" && state?.value?.length < 11) ||
        (state?.type === "code" && state?.value?.length < 6)
      }
      type="submit"
      fullWidth
      variant="contained"
      sx={verifyNumber_style}

    >
      {loading ? <CircularIndeterminate color="#222" /> : "ادامه"}
    </Button>
  );
};

export default VerifyButton;
