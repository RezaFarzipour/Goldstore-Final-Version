import { Box, Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../../styles/theme";

type Props = {
  px?: number;
};
const dashboard = "201";
const EnterBtn = ({ px }: Props) => {
  return (
    <Box>
      <Tooltip title="ثبت نام">
        <Link to={dashboard === "200" ? "/" : "/SignUp"}>
          <Button
            sx={{
              px: px,
              whiteSpace: "nowrap",
              fontFamily: "Yekan",
              fontWeight: "bold",
              fontSize: "16px",
              color: colors.gold[100],
              border: `1px solid ${colors.gold[100]}`,
              "&:hover": { backgroundColor: "rgba(204, 163, 69,0.4)" },
            }}
          >
            {dashboard === "200" ? "پروفایل" : "ورود | ثبت نام"}
          </Button>
        </Link>
      </Tooltip>
    </Box>
  );
};

export default EnterBtn;
