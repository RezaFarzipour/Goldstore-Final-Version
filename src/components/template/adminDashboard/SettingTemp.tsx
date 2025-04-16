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
import { useToast } from "../../../context/ToastProvider";
import {
  formatNumberWithCommas,
  removeCommas,
} from "../../../utils/numberFormatter";

const SettingTemp = () => {
  const [addingPrice, setAddingPrice] = useState<string>("");
  const [inventoryAmount, setInventoryAmount] = useState<string>("");
  const [priceDifference, setPriceDifference] = useState<string>("");
  const { showToast } = useToast();

  // Fetch data using useQuery
  const { data, isLoading, refetch } = useQuery({
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

  // Handlers for input changes
  const handleAddingPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatNumberWithCommas(rawValue);
    setAddingPrice(formattedValue);
  };

  const handleInventoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInventoryAmount(e.target.value); // No formatting needed for inventory amount
  };

  const handlePriceDifferenceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const rawValue = e.target.value;
    const formattedValue = formatNumberWithCommas(rawValue);
    setPriceDifference(formattedValue);
  };

  // Handlers for mutations
  const changeGoldPriceHandler = async () => {
    try {
      const rawValue = removeCommas(addingPrice); // Remove commas before sending
      await mutateChangeGoldPrice(rawValue);
      showToast("عملیات با موفقیت انجام شد!", "success");
    } catch {
      showToast("خطایی رخ داده است!", "error");
    }
  };

  const changeInventoryHandler = async () => {
    try {
      await mutateChangeWarehouseGoldAmount(inventoryAmount); // No need to remove commas
      showToast("عملیات با موفقیت انجام شد!", "success");
    } catch {
      showToast("خطایی رخ داده است!", "error");
    }
  };

  const changePriceDifferenceHandler = async () => {
    try {
      const rawValue = removeCommas(priceDifference); // Remove commas before sending
      await mutateChangePriceDifference(rawValue);
      showToast("عملیات با موفقیت انجام شد!", "success");
    } catch {
      showToast("خطایی رخ داده است!", "error");
    }
  };

  // Check loading state
  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
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
              isPending={false}
              assetAmount={addingPrice}
              assetAmountChanger={setAddingPrice}
            />
          </Box>

          {/* Inventory Amount Box */}
          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="تغییر میزان موجودی:"
              footerContent="طلای موجود"
              unit="گرم"
              walletGoldBalance={data?.data?.total_gold_stock}
              buttonValue="تایید"
              display="flex"
              handleChange={handleInventoryChange}
              submit={changeInventoryHandler}
              isPending={false}
              assetAmount={inventoryAmount}
              assetAmountChanger={setInventoryAmount}
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
              isPending={false}
              assetAmount={priceDifference}
              assetAmountChanger={setPriceDifference}
            />
          </Box>
        </Box>
      </Box>
    </Rtl>
  );
};

export default SettingTemp;
