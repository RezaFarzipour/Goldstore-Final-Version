import { Box, Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../../styles/theme";
import { getCookie } from "../../../utils/cookie";
import { useEffect, useState } from "react";

type Props = {
  px?: number;
};

const userType: string | null = getCookie("user_type");

let targetPath = "/signup";

const EnterBtn = ({ px }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false);

  useEffect(() => {
    const token = getCookie("token");
    setIsLoggedIn(!!token?.trim());
  }, []);



  if (isLoggedIn) {
    switch (userType) {
      case "customer":
        targetPath = "/customerdashboard";
        break;

      case "admin":
        targetPath = "/admin";
        break;

      default:
        targetPath = "/";
    }
  }

  return (
    <Box>
      <Tooltip title="ثبت نام">
        <Link to={targetPath}>
          <Button
            sx={{
              px: px,
              whiteSpace: "nowrap",

              fontWeight: "400",
              fontSize: "13px",
              color: colors.gold[100],
              border: `1px solid ${colors.gold[100]}`,
              "&:hover": { backgroundColor: "rgba(204, 163, 69,0.4)" },
            }}
          >
            {isLoggedIn ? "پروفایل" : "ورود | ثبت نام"}
          </Button>
        </Link>
      </Tooltip>
    </Box>
  );
};

export default EnterBtn;
