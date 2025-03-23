import React from "react";
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

type BuyAndSellBoxProps = BaseProps & {
  buttonValue: string;
};

const BuyAndSellBox = ({
  headerLable,
  priceColor,
  buttonValue,
}: BuyAndSellBoxProps) => {
  const [textFieldValue, setTextFieldValue] = React.useState("");
  const [goldTextField, setGoldTextField] = React.useState("");

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/,/g, "");
    setTextFieldValue(priceSeptrator(Number(value)));

    // const goldValue =
    //   parseFloat(value) / parseFloat(string1.value());

    // setGoldTextField(goldValue.toFixed(3));

    // if (newValueFormat == 0) {
    //   setGoldTextField(0);
    // }
  };

  //onChange Gold
  const goldTextFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setGoldTextField(newValue);

    // const goldValue = parseFloat(newValue) * parseFloat(string1.value());
    // setTextFieldValue(numeral(goldValue).format("0,0"));
  };

  return (
    <Paper sx={PaperOneSxBuyGold}>
      <Box>
        <Paper elevation={10} sx={PapertwoSx}>
          <BuyAndSellBoxHeader
            headerLable={headerLable}
            priceColor={priceColor}
          />
          <Rtl>
            <BuyAndSellFormControl
              total="ارزش کل"
              unit="ریال"
              textFieldValue={textFieldValue}
              handleChange={handleTextFieldChange}
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
        <Button variant="outlined" dir={"rtl"} sx={BButtonThreeSx}>
          {buttonValue}
        </Button>
      </Box>
      <BuyAndSellBoxFooter />
    </Paper>
  );
};

export default BuyAndSellBox;
