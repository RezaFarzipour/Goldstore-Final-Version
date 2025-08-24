import { Snackbar, Alert, Typography, Stack } from "@mui/material";

export default function AdminHintToast({ adminPhone }: { adminPhone: string }) {
  return (
    <Snackbar
      open
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      // بدون autoHideDuration یعنی ثابت می‌ماند
    >
      <Alert
        elevation={6}
        variant="filled"
        severity="info"
        sx={{
          bgcolor: "grey.800",
          color: "grey.100",
          border: "1px solid",
          borderColor: "grey.700",
          width: { xs: "92vw", sm: 540 },
        }}
      >
        <Stack spacing={0.5}>
          <Typography variant="body2" sx={{ color: "grey.100" }}>
            برای ورود به داشبورد{" "}
            <Typography component="span" sx={{ fontWeight: 700, color: "warning.main" }}>
              ادمین
            </Typography>{" "}
            با شماره{" "}
            <Typography component="span" sx={{ fontWeight: 700, color: "amber.300" }}>
              {adminPhone}
            </Typography>{" "}
            وارد شوید.
          </Typography>

          <Typography variant="body2" sx={{ color: "grey.100" }}>
            برای ورود به داشبورد{" "}
            <Typography component="span" sx={{ fontWeight: 700, color: "success.light" }}>
              کاربر
            </Typography>{" "}
            با شماره{" "}
            <Typography component="span" sx={{ fontWeight: 700 }}>
              خودتان
            </Typography>{" "}
            وارد شوید.
          </Typography>
        </Stack>
      </Alert>
    </Snackbar>
  );
}
