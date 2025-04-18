import React from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  formatNumberWithCommas,
  priceSeptrator,
  toPersianDigits,
} from "../../utils/numberFormatter";
import { colors } from "../../styles/theme";

// تعریف نوع پراپس‌ها
interface DynamicModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  inputLabel: string;
  inputValueState?: string;
  setInputValueState?: (value: string) => void;
  onButtonClick: (value: string) => void;
  buttonLabel: string;
  dataAmount: string | number;
  dataAmountType: string;
  comma: boolean;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "400px" },
  bgcolor: "#212121",
  color: "#fff",
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
  comma,
}) => {
  const theme = useTheme();
  // تابع مدیریت تغییرات فیلد ورودی
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const withComma = formatNumberWithCommas(event.target.value);
    if (comma) {
      setInputValueState?.(withComma);
    } else {
      setInputValueState?.(event.target.value);
    }
  };

  // تابع مدیریت کلیک روی دکمه
  const handleButtonClick = () => {
    onButtonClick(inputValueState); // ارسال مقدار ورودی به تابع پدر
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        "& .css-53g0n7-MuiButtonBase-root-MuiIconButton-root": {
          color: "#fff",
        },
      }}
    >
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
          sx={{
            "& .MuiFormLabel-root": {
              color: "#fff !important",
            },
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              bgcolor: theme.palette.grey[800],
              color: "#fff",
            },
          }}
        />
        <Typography>
          {toPersianDigits(priceSeptrator(dataAmount))} &nbsp;
          {dataAmountType}
        </Typography>
        {/* دکمه */}
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderColor: colors.gold[100],
            color: colors.gold[100],
            fontWeight: "bold",
            mt: 2,
            "&:hover": {
              borderColor: colors.gold[100],
            },
          }}
          onClick={handleButtonClick}
        >
          {buttonLabel}
        </Button>
      </Box>
    </Modal>
  );
};

export default DynamicModal;
