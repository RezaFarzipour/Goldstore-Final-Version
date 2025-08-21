import { useEffect } from "react";
import { priceSeptrator } from "../utils/numberFormatter";


interface UseGoldConverterProps {
  price: number;
  isEditingGold: boolean;
  goldInput: string|number;
  moneyInput: string|number;
  setGoldInput: (val: string) => void;
  setMoneyInput: (val: string) => void;
}

export const useGoldConverter = ({
  price,
  isEditingGold,
  goldInput,
  moneyInput,
  setGoldInput,
  setMoneyInput,
}: UseGoldConverterProps) => {
  // پول → طلا
  useEffect(() => {
    if (isEditingGold) return;

    if (moneyInput === "") {
      setGoldInput("");
      return;
    }
    const moneyStr = typeof moneyInput === "string" ? moneyInput : String(moneyInput);
    const money = parseFloat(moneyStr.replace(/,/g, ""));
    if (!isNaN(money) && price > 0) {
      const grams = money / price;
      setGoldInput(grams.toFixed(3));
    }
  }, [moneyInput, price]);

  // طلا → پول
  useEffect(() => {
    if (!isEditingGold) return;

    if (goldInput === "") {
      setMoneyInput("");
      return;
    }
    const gramsStr = typeof goldInput === "string" ? goldInput : String(goldInput);
    const grams = parseFloat(gramsStr);
    if (!isNaN(grams) && price > 0) {
      const money = grams * price;
      setMoneyInput(priceSeptrator(Math.round(money)));
    }
  }, [goldInput, price]);
};
