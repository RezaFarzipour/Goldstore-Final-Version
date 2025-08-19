import Alert, { AlertColor } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Alerts({
  severity,
  text,
}: {
  severity:  AlertColor;
  text: string;
}) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={severity}>{text}</Alert>
    </Stack>
  );
}
