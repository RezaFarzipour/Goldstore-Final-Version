import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate({ color }: { color: string }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress size={20} sx={{ color: color }} />
    </Box>
  );
}
