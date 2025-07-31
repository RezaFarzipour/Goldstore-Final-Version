import React from "react";
import BuyAndSellBox from "../../modules/customerDashboard/BuyAndSellBoxModule";
import { Box } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { sellgold, walletdata } from "../../../services/customerDashboard";
import { ErrorPendingHandler } from "../../element/ErrrorPendingHandler";
import { useToast } from "../../../context/ToastProvider";
import SectionTitle from "../../element/SectionTitle";

const SellGold = () => {
  const [textFieldValue, setTextFieldValue] = React.useState("");
  const [goldTextField, setGoldTextField] = React.useState("");
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const {
    data: walletData,
    error,
    isPending,
  } = useQuery({
    queryKey: ["walletdata"],
    queryFn: walletdata,
  });

  ErrorPendingHandler(error?.message, isPending);
  const sellPrice = walletData?.sellPrice;

  const {
    mutate,
    isPending: selling,
  } = useMutation({
    mutationKey: ["buygold"],
    mutationFn: sellgold,
    onSuccess: (data) => {
      if (data.status === 200) {
        showToast("فروش انجام شد.منتظر تایید ادمین باشید ", "success");
      }
      setTextFieldValue("");
      setGoldTextField("");
      queryClient.invalidateQueries({ queryKey: ["walletdata"] });
    },
    onError: () => {
      showToast("خطایی رخ داده است", "error");
      setTextFieldValue("");
      setGoldTextField("");
    },
  });

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column" }}
      >
        <SectionTitle title="فروش طلا" />
        <BuyAndSellBox
        setGoldTextField={setGoldTextField}
        setTextFieldValue={setTextFieldValue}
        textFieldValue={textFieldValue}
        goldTextField={goldTextField}
        walletBalance={walletData?.goldBalance}
          mutate={mutate}
          isPending={selling}
          price={sellPrice}
          walletData={walletData}
          headerLable="قیمت فروش"
          priceColor="red"
          buttonValue="فروش"
        />
      </Box>
    </>
  );
};

export default SellGold;
