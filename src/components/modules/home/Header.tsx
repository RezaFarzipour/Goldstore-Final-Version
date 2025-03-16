import { Box, useMediaQuery } from "@mui/material";
import Diamond from "../../element/Diamond";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "50vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 2,
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: isMobile ? 1 : 2,
            position: "absolute",
            top: isMobile ? "10%" : "0%",
          }}
        >
          {isMobile
            ? [1, 2, 3].map((index) => (
                <Diamond key={index} position="top" startTime={0} />
              ))
            : [1, 2, 3, 4].map((index) => (
                <Diamond key={index} position="top" startTime={0} />
              ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: isMobile ? 1 : 2,
            position: "absolute",
            top: isMobile ? "30%" : "30%",
          }}
        >
          {isMobile
            ? [1, 2].map((index) => (
                <Diamond key={index} position="bottom" startTime={4} />
              ))
            : [1, 2, 3].map((index) => (
                <Diamond key={index} position="bottom" startTime={4} />
              ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
