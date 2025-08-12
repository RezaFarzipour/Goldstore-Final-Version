import React, { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { Rtl } from "../components/element/rtl";

// تعریف نوع برای Context
interface ToastContextType {
  showToast: (
    message: string,
    severity: "success" | "error" | "warning" | "info"
  ) => void;
}

export const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("success");

  const showToast = (
    message: string,
    severity: "success" | "error" | "warning" | "info"
  ) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Rtl>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Rtl>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast باید درون یک ToastProvider استفاده شود");
  }
  return context;
};

// showToast("عملیات با موفقیت انجام شد!", "success");
// showToast("خطایی رخ داده است!", "error")
// showToast("هشدار: این یک پیام هشدار است.", "warning");
// showToast("اطلاعات: این یک پیام اطلاعاتی است.", "info");
