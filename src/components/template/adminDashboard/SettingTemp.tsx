import { Rtl } from "../../element/rtl";
import { Box } from "@mui/material";
import DepositeBox from "../../modules/DepositeBoxModule";
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
import CircularMini from "../../element/CircularMini";

const SettingTemp = () => {
  const [formValues, setFormValues] = useState({
    addingPrice: "",
    inventoryAmount: "",
    priceDifference: "",
  });

  const { showToast } = useToast();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["settingData"],
    queryFn: settingData,
  });

  const { mutateAsync: mutateChangeGoldPrice, isPending: isPricePending } =
    useMutation({
      mutationFn: changeGoldPrice,
      onSuccess: refetch,
    });

  const {
    mutateAsync: mutateChangeWarehouseGoldAmount,
    isPending: isInventoryPending,
  } = useMutation({
    mutationFn: changeWarehouseGoldAmount,
    onSuccess: refetch,
  });

  const { mutateAsync: mutateChangePriceDifference, isPending: isDiffPending } =
    useMutation({
      mutationFn: changePriceDifference,
      onSuccess: refetch,
    });

  const handleChange =
    (name: keyof typeof formValues, format?: boolean) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = format
        ? formatNumberWithCommas(e.target.value)
        : e.target.value;
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

  const handleSubmit = async (
    key: "addingPrice" | "inventoryAmount" | "priceDifference"
  ) => {
    try {
      const rawValue =
        key === "inventoryAmount"
          ? formValues[key]
          : removeCommas(formValues[key]);

      if (key === "addingPrice") await mutateChangeGoldPrice(rawValue);
      if (key === "inventoryAmount")
        await mutateChangeWarehouseGoldAmount(rawValue);
      if (key === "priceDifference")
        await mutateChangePriceDifference(rawValue);

      showToast("عملیات با موفقیت انجام شد!", "success");
    } catch {
      showToast("خطایی رخ داده است!", "error");
    }
  };

  if (isLoading) {
    return <CircularMini />;
  }

  return (
    <Rtl>
      <Box my={8}>
        <Box my={2} display="flex" justifyContent="center" alignItems="center">
          <AdminPermission stock_status={data?.data?.stock_status} />
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
              walletBalance={data?.data?.sale_price}
              buttonValue="تایید"
              display="flex"
              handleChange={handleChange("addingPrice", true)}
              submit={() => handleSubmit("addingPrice")}
              isPending={isPricePending}
              assetAmount={formValues.addingPrice}
              assetAmountChanger={(val) =>
                setFormValues((prev) => ({ ...prev, addingPrice: val }))
              }
            />
          </Box>

          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="تغییر میزان موجودی:"
              footerContent="طلای موجود"
              unit="گرم"
              walletGoldBalance={data?.data?.total_gold_stock}
              buttonValue="تایید"
              display="flex"
              handleChange={handleChange("inventoryAmount")}
              submit={() => handleSubmit("inventoryAmount")}
              isPending={isInventoryPending}
              assetAmount={formValues.inventoryAmount}
              assetAmountChanger={(val) =>
                setFormValues((prev) => ({ ...prev, inventoryAmount: val }))
              }
            />
          </Box>

          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="اختلاف قیمت خرید و فروش:"
              footerContent="اختلاف قیمت فعلی"
              unit="ریال"
              walletBalance={data?.data?.price_difference}
              buttonValue="تایید"
              display="flex"
              handleChange={handleChange("priceDifference", true)}
              submit={() => handleSubmit("priceDifference")}
              isPending={isDiffPending}
              assetAmount={formValues.priceDifference}
              assetAmountChanger={(val) =>
                setFormValues((prev) => ({ ...prev, priceDifference: val }))
              }
            />
          </Box>
        </Box>
      </Box>
    </Rtl>
  );
};

export default SettingTemp;
