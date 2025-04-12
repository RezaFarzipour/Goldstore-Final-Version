import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { colors } from "../../../styles/theme";

const DirectSignUp = () => {
  return (
    <Box
      sx={{
        p: 1.5,
        bgcolor: "#F1AB1F",
        borderRadius: "10px",
        "&:hover": { bgcolor:  colors.gold[100] },
      }}
    >
      <Link to="/signup">
        <Button
          sx={{
            color: colors.grey[200],
            fontSize: { xs: "15px", md: "18px" },
            fontFamily: "Yekan",
            fontWeight: "bold",
          }}
          endIcon={<ArrowBackIosIcon sx={{ mr: 2 }} />}
        >
          برای شروع خرید و فروش طلا کلیک کنید
        </Button>
      </Link>
    </Box>
  );
};

export default DirectSignUp;
