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
          <Typography
            variant="body2"
            sx={{ color: "grey.100", fontSize: { xs: "10px", md: "14px" } }}
          >
            برای ورود به داشبورد{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
                color: "warning.main",
                fontSize: { xs: "10px", md: "12px" },
              }}
            >
              ادمین
            </Typography>{" "}
            با شماره{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
                color: "amber.300",
                fontSize: { xs: "10px", md: "12px" },
              }}
            >
              {adminPhone}
            </Typography>{" "}
            وارد شوید.
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "grey.100", fontSize: { xs: "10px", md: "14px" } }}
          >
            برای ورود به داشبورد{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
                color: "success.light",
                fontSize: { xs: "10px", md: "14px" },
              }}
            >
              کاربر
            </Typography>{" "}
            اگر می‌خواهید داشبورد{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
                color: "info.main",
                fontSize: { xs: "10px", md: "14px" },
              }}
            >
              دیتا
            </Typography>{" "}
            داشته باشد، با شماره{" "}
            <Typography
              component="span"
              sx={{
                fontWeight: 700,
                color: "amber.300",
                fontSize: { xs: "10px", md: "14px" },
              }}
            >
              09921188364
            </Typography>{" "}
            وارد شوید. در غیر این صورت می‌توانید با شماره{" "}
            <Typography
              component="span"
              sx={{ fontWeight: 700, fontSize: { xs: "12px", md: "14px" } }}
            >
              شخصی خودتان
            </Typography>{" "}
            وارد شوید.
          </Typography>
        </Stack>
      </Alert>
    </Snackbar>
  );
}
