import React, { useEffect, useState } from "react";
import BuyAndSellFormControl from "../../element/BuyAndSellFormControl";
import { Box, Button, Paper } from "@mui/material";
import {
  BButtonThreeSx,
  PaperOneSxBuyGold,
  PapertwoSx,
} from "../../template/customerdashboard/style";

import { priceSeptrator } from "../../../utils/numberFormatter";

import BuyAndSellBoxHeader from "../../element/BuyAndSellBoxHeader";
import BuyAndSellBoxFooter from "../../element/BuyAndSellBoxFooter";
import { BaseProps } from "../../../types";
import { Rtl } from "../../element/rtl";
import Alerts from "../../element/AlertElement";

type BuyAndSellBoxProps = BaseProps & {
  buttonValue: string;
  isPending: boolean;
  mutate: (goldTextField: string) => void;
  walletBalance?: number;
};

const BuyAndSellBox = ({
  headerLable,
  priceColor,
  buttonValue,
  walletData,
  price,
  isPending,
  walletBalance,
  mutate,
}: BuyAndSellBoxProps) => {
  const [textFieldValue, setTextFieldValue] = React.useState("");
  const [goldTextField, setGoldTextField] = React.useState("");
  const [isEditingGold, setIsEditingGold] = React.useState<boolean>(false);
  const [errorMessage,setErrorMessage] = useState<string | null>(null)

  const handleSubmit = () => {
    const totalMoney = parseFloat(textFieldValue.replace(/,/g, ""));

    if (walletBalance !== undefined && totalMoney > walletBalance) {
      setErrorMessage("موجودی کافی نیست")
      return;
    }
    setErrorMessage(null)
    mutate(goldTextField);
  };

  //money onChange
  const moneyTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEditingGold(false); // یعنی کاربر داره پول وارد می‌کنه
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
    setIsEditingGold(true); // یعنی کاربر داره طلا وارد می‌کنه
    setGoldTextField(event.target.value);
  };

  // تبدیل پول به طلا
  useEffect(() => {
    if (isEditingGold) return; // فقط اجرا کن اگه کاربر طلا وارد نمی‌کنه

    if (textFieldValue === "") {
      setGoldTextField("");
      return;
    }

    const money = parseFloat(textFieldValue.replace(/,/g, ""));
    if (!isNaN(money) && typeof price === "number" && price > 0) {
      const grams = money / price;
      setGoldTextField(grams.toFixed(3));
    }
  }, [textFieldValue, price]);

  // تبدیل طلا به پول
  useEffect(() => {
    if (!isEditingGold) return; // فقط وقتی کاربر طلا وارد کرده

    if (goldTextField === "") {
      setTextFieldValue("");
      return;
    }

    const grams = parseFloat(goldTextField);
    if (!isNaN(grams) && typeof price === "number" && price > 0) {
      const money = grams * price;
      setTextFieldValue(priceSeptrator(Math.round(money)));
    }
  }, [goldTextField, price]);

  return (
    
    <>
    
    <Paper sx={PaperOneSxBuyGold}>
    {errorMessage && <Alerts severity="error" text={errorMessage}/>}
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
