import { useState } from "react";
import { Rtl } from "../../element/rtl";
import { Box } from "@mui/material";
import DepositeBox from "../../modules/DepositeBoxModule";
import { useMutation, useQuery } from "@tanstack/react-query";
import { receiveGold, walletdata } from "../../../services/customerDashboard";
import { ErrorPendingHandler } from "../../element/ErrrorPendingHandler";
import SectionTitle from "../../element/SectionTitle";

const ReceiveGold = () => {
  const [receiveGoldAmount, setReceiveGoldAmount] = useState("");

  const {
    data: walletData,
    error,
    isPending,
  } = useQuery({
    queryKey: ["walletdata"],
    queryFn: walletdata,
  });

  const { mutate, isPending: receiving } = useMutation({
    mutationKey: ["goldreceive"],
    mutationFn: receiveGold,
  });

  const walletBalance = walletData?.goldBalance;
  ErrorPendingHandler(error?.message, isPending);

  return (
    <>
      <Rtl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: { xs: "90%", md: "35%" } }}>
            <SectionTitle title="دریافت طلا" />
            <DepositeBox
              isPending={receiving}
              handleChange={(e) => setReceiveGoldAmount(e.target.value)}
              assetAmount={receiveGoldAmount}
              assetAmountChanger={setReceiveGoldAmount}
              submit={mutate}
              walletBalance={walletBalance}
              headerContent="مقدار را وارد کنید"
              footerContent="موجود کیف طلا"
              unit="گرم"
              buttonValue="دریافت"
              display="flex"
            />
          </Box>
        </Box>
      </Rtl>
    </>
  );
};

export default ReceiveGold;
