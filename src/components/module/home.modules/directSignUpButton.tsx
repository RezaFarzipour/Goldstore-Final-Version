import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";

const Direct_Sign_up = () => {
  return (
    <Box
      sx={{
        p: 1.5,
        bgcolor: "#F1AB1F",
        borderRadius: "10px",
        "&:hover": { bgcolor: "#d3961b" },
      }}
    >
      <Link to="/signup">
        <Button
          sx={{
            color: "#111",
            fontSize: { xs: "15px", md: "20px" },
            fontFamily: "Yekan",
          }}
          endIcon={<ArrowBackIosIcon sx={{ mr: 2 }} />}
        >
          برای شروع خرید و فروش طلا کلیک کنید
        </Button>
      </Link>
    </Box>
  );
};

export default Direct_Sign_up;
