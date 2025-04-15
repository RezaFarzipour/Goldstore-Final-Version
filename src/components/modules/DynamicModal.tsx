import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { priceSeptrator, toPersianDigits } from "../../utils/numberFormatter";

// تعریف نوع پراپس‌ها
interface DynamicModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  inputLabel: string;
  inputValueState?: string;
  onButtonClick: (value: string) => void;
  buttonLabel: string;
  dataAmount: string | number;
  dataAmountType: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "400px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const DynamicModal: React.FC<DynamicModalProps> = ({
  open,
  onClose,
  title,
  inputLabel,
  inputValueState = "",
  setInputValueState,
  onButtonClick,
  buttonLabel,
  dataAmount,
  dataAmountType,
}) => {
  // تابع مدیریت تغییرات فیلد ورودی
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueState(event.target.value);
  };

  // تابع مدیریت کلیک روی دکمه
  const handleButtonClick = () => {
    onButtonClick(inputValueState); // ارسال مقدار ورودی به تابع پدر
    onClose(); // بستن مودال پس از کلیک
  };
  console.log(dataAmount);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        {/* تایتل */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <IconButton onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* فیلد ورودی */}
        <TextField
          label={inputLabel}
          value={inputValueState}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Typography>
          {toPersianDigits(priceSeptrator(dataAmount))}
          {dataAmountType}
        </Typography>
        {/* دکمه */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleButtonClick}
        >
          {buttonLabel}
        </Button>
      </Box>
    </Modal>
  );
};

export default DynamicModal;
