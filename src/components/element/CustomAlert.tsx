import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  message: string;
  type: "success" | "error"; // نوع پیام
}

const ToastMessage: React.FC<ToastProps> = ({ message, type }) => {

  React.useEffect(() => {
    if (type === "success") {
      toast.success(message); 
    } else {
      toast.error(message); 
    }
  }, [message, type]);

  return <ToastContainer />;
};

export default ToastMessage;
