import { Rtl } from "../../element/rtl";
import { Box } from "@mui/material";
import DepositeBox from "../../modules/customerDashboard/DepositeBoxModule";
import AdminPermission from "../../element/AdminPerrmishion";
import {
  changeGoldPrice,
  changePriceDifference,
  changeWarehouseGoldAmount,
  settingData,
} from "../../../services/adminPanel";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

type Props = {};

const SettingTemp = (props: Props) => {
  const [addingPrice, setAddingPrice] = useState<string>("");
  const [inventoryAmount, setInventoryAmount] = useState<string>("");
  const [priceDifference, setPriceDifference] = useState<string>("");

  const { data, error, isLoading } = useQuery({
    queryKey: ["settingData"],
    queryFn: settingData,
    onError: (err: any) => {
      console.log(err.message);
    },
    onSuccess: () => {
      console.log(data);
    },
  });

  const { mutateAsync: mutateChangeGoldPrice } = useMutation({
    mutationFn: changeGoldPrice,
  });
  const { mutateAsync: mutateChangeWarehouseGoldAmount } = useMutation({
    mutationFn: changeWarehouseGoldAmount,
  });
  const { mutateAsync: mutateChangePriceDifference } = useMutation({
    mutationFn: changePriceDifference,
  });

  const changeGoldPriceHandler = async () => {
    try {
      const res = await mutateChangeGoldPrice(addingPrice);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeInventoryHandler = async () => {
    try {
      const res = await mutateChangeWarehouseGoldAmount(inventoryAmount);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changePriceDifferenceHandler = async () => {
    try {
      const res = await mutateChangePriceDifference(priceDifference);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddingPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddingPrice(e.target.value);
  };

  const handleInventoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInventoryAmount(e.target.value);
  };

  const handlePriceDifferenceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPriceDifference(e.target.value);
  };

  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }
  return (
    <Rtl>
      <Box my={8}>
        <Box
          my={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AdminPermission stock_status={true} />
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="قیمت گذاری:"
              footerContent="قیمت قبلی"
              unit="ریال"
              buttonValue="تایید"
              display="flex"
              handleChange={handleAddingPriceChange}
              submit={changeGoldPriceHandler}
            />
          </Box>
          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="تغییر میزان موجودی:"
              footerContent="طلای موجود"
              unit="گرم"
              buttonValue="تایید"
              display="flex"
              handleChange={handleInventoryChange}
              submit={changeInventoryHandler}
            />
          </Box>
          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="اختلاف قیمت خرید و فروش:"
              footerContent="اختلاف قیمت فعلی"
              unit="ریال"
              buttonValue="تایید"
              display="flex"
              handleChange={handlePriceDifferenceChange}
              submit={changePriceDifferenceHandler}
            />
          </Box>
        </Box>
      </Box>
    </Rtl>
  );
};
export default SettingTemp;
