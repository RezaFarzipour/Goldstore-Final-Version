import { Box } from "@mui/material";
import BuyAndSellBox from "../../modules/customerDashboard/BuyAndSellBoxModule";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { buyGold, walletdata } from "../../../services/customerDashboard";
import { ErrorPendingHandler } from "../../element/ErrrorPendingHandler";
import { useToast } from "../../../context/ToastProvider";
import { useState } from "react";

const BuyGold = () => {
  const { showToast } = useToast();
  const [textFieldValue, setTextFieldValue] = useState("");
  const [goldTextField, setGoldTextField] = useState("");
  const {
    data: walletData,
    error,
    isPending,
  } = useQuery({
    queryKey: ["walletdata"],
    queryFn: walletdata,
  });

  const queryClient = useQueryClient();

  const { mutate, isPending: buying } = useMutation({
    mutationKey: ["buygold"],
    mutationFn: buyGold,
    onSuccess: (data) => {
      if (data.status === 200) {
        showToast("خرید با موفقیت انجام شد. ", "success");
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

  ErrorPendingHandler(error?.message, isPending);
  const buyPrice = walletData?.buyPrice;
  const walletBalance = walletData?.walletBalance;

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <BuyAndSellBox
          setGoldTextField={setGoldTextField}
          setTextFieldValue={setTextFieldValue}
          textFieldValue={textFieldValue}
          goldTextField={goldTextField}
          walletBalance={walletBalance}
          mutate={mutate}
          isPending={buying}
          price={buyPrice}
          walletData={walletData}
          headerLable="قیمت خرید"
          priceColor={"green"}
          buttonValue="خرید"
        />
      </Box>
    </>
  );
};

export default BuyGold;
