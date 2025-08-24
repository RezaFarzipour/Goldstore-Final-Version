import React from "react";
import BuyAndSellFormControl from "../../element/buyandsell/FormControl";
import { Box, Button, Paper } from "@mui/material";
import { priceSeptrator } from "../../../utils/numberFormatter";
import BuyAndSellBoxHeader from "../../element/buyandsell/BoxHeader";
import BuyAndSellBoxFooter from "../../element/buyandsell/BoxFooter";
import { BaseProps } from "../../../types";
import { Rtl } from "../../element/Rtl";
import { useToast } from "../../../context/ToastProvider"; // ✅ فعال شد
import { useGoldConverter } from "../../../hooks/useGoldConverter";
import { BButtonThreeSx, PaperOneSxBuyGold, PapertwoSx } from "./buysellstyle";

type BuyAndSellBoxProps = BaseProps & {
  buttonValue: string;
  isPending: boolean;
  mutate: (goldTextField: string) => void;
  walletBalance?: number;
  setGoldTextField: React.Dispatch<React.SetStateAction<string>>;
  setTextFieldValue: React.Dispatch<React.SetStateAction<string>>;
  goldTextField: string;
  textFieldValue: string;
};

const BuyAndSellBox = ({
  headerLable,
  priceColor,
  buttonValue,
  walletData,
  price = 0,
  isPending,
  walletBalance,
  textFieldValue,
  goldTextField,
  setGoldTextField,
  setTextFieldValue,
  mutate,
}: BuyAndSellBoxProps) => {
  const [isEditingGold, setIsEditingGold] = React.useState<boolean>(false);
  const { showToast } = useToast(); // ✅

  useGoldConverter({
    price,
    isEditingGold,
    goldInput: goldTextField,
    moneyInput: textFieldValue,
    setGoldInput: setGoldTextField,
    setMoneyInput: setTextFieldValue,
  });

  const handleSubmit = () => {
    // فقط برای فروش موجودی چک میشه
    if (
      buttonValue === "فروش" &&
      walletBalance !== undefined &&
      parseFloat(goldTextField) > walletBalance
    ) {
      showToast("موجودی کافی نیست", "error");
      return;
    }

    mutate(goldTextField);
  };

  //money onChange
  const moneyTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEditingGold(false);
    const raw = event.target.value.replace(/,/g, "");
    if (raw === "") {
      setTextFieldValue("");
      return;
    }
    const num = Number(raw);
    if (!isNaN(num)) {
      setTextFieldValue(priceSeptrator(num));
    }
  };

  // Gold onChange
  const goldTextFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEditingGold(true);
    setGoldTextField(event.target.value);
  };

  return (
    <>
      <Paper sx={PaperOneSxBuyGold}>
        <Box>
          <Paper elevation={10} sx={PapertwoSx}>
            <BuyAndSellBoxHeader
              price={price}
              headerLable={headerLable}
              priceColor={priceColor}
            />
            <Rtl>
              <BuyAndSellFormControl
                total="ارزش کل"
                unit="ریال"
                textFieldValue={textFieldValue}
                handleChange={moneyTextFieldChange}
              />
              <BuyAndSellFormControl
                total="مقدار طلا"
                unit="گرم"
                textFieldValue={goldTextField}
                handleChange={goldTextFieldHandler}
              />
            </Rtl>
          </Paper>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            dir={"rtl"}
            sx={BButtonThreeSx}
            onClick={handleSubmit}
          >
            {isPending ? "در حال پردازش" : buttonValue}
          </Button>
        </Box>
        <BuyAndSellBoxFooter walletData={walletData} />
      </Paper>
    </>
  );
};

export default BuyAndSellBox;
