import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { colors } from "../../styles/theme";

const CircularMini = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <CircularProgress
        thickness={4}
        size={60}
        sx={{
          color: colors.gold[200],
        }}
      />
    </Box>
  );
};

export default CircularMini;
