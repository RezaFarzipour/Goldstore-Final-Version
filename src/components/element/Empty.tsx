import { Box, Typography } from "@mui/material";
import SyncProblemIcon from "@mui/icons-material/SyncProblem";
import { colors } from "../../styles/theme";
const EmptyPage = ({
  message = "داده‌ای برای نمایش وجود ندارد",
}: {
  message?: string;
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
      textAlign="center"
      gap={2}
    >
      <SyncProblemIcon sx={{ fontSize: 80, color: colors.gold[200] }} />
      <Typography variant="h6" sx={{ color: colors.gold[200] }}>
        {message}
      </Typography>
    </Box>
  );
};

export default EmptyPage;
