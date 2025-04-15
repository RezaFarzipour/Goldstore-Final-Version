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

  // Fetch data using useQuery
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["settingData"],
    queryFn: settingData,
  });

  // Mutation for changing gold price
  const { mutateAsync: mutateChangeGoldPrice } = useMutation({
    mutationFn: changeGoldPrice,
    onSuccess: async () => {
      await refetch();
    },
  });

  // Mutation for changing warehouse gold amount
  const { mutateAsync: mutateChangeWarehouseGoldAmount } = useMutation({
    mutationFn: changeWarehouseGoldAmount,
    onSuccess: async () => {
      await refetch();
    },
  });

  // Mutation for changing price difference
  const { mutateAsync: mutateChangePriceDifference } = useMutation({
    mutationFn: changePriceDifference,
    onSuccess: async () => {
      await refetch();
    },
  });

  // Handlers for mutations
  const changeGoldPriceHandler = async () => {
    try {
      await mutateChangeGoldPrice(addingPrice);
    } catch (error) {
      console.error("Error changing gold price:", error);
    }
  };

  const changeInventoryHandler = async () => {
    try {
      await mutateChangeWarehouseGoldAmount(inventoryAmount);
    } catch (error) {
      console.error("Error changing inventory amount:", error);
    }
  };

  const changePriceDifferenceHandler = async () => {
    try {
      await mutateChangePriceDifference(priceDifference);
    } catch (error) {
      console.error("Error changing price difference:", error);
    }
  };

  // Input change handlers
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

  // Check loading state
  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  // Check error state
  if (error) {
    return <div>خطا در دریافت داده‌ها: {(error as Error).message}</div>;
  }

  return (
    <Rtl>
      <Box my={8}>
        {/* Admin Permission */}
        <Box
          my={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AdminPermission stock_status={data?.data?.stock_status} />
        </Box>

        {/* Boxes */}
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Gold Price Box */}
          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="قیمت گذاری:"
              footerContent="قیمت قبلی"
              unit="ریال"
              walletBalance={data?.data?.sale_price}
              buttonValue="تایید"
              display="flex"
              handleChange={handleAddingPriceChange}
              submit={changeGoldPriceHandler}
            />
          </Box>

          {/* Inventory Amount Box */}
          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="تغییر میزان موجودی:"
              footerContent="طلای موجود"
              unit="گرم"
              walletBalance={data?.data?.total_gold_stock}
              buttonValue="تایید"
              display="flex"
              handleChange={handleInventoryChange}
              submit={changeInventoryHandler}
            />
          </Box>

          {/* Price Difference Box */}
          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="اختلاف قیمت خرید و فروش:"
              footerContent="اختلاف قیمت فعلی"
              unit="ریال"
              walletBalance={data?.data?.price_difference}
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
