import api from "../configs/api";
import { WalletDataResponse } from "../types";
import { getCookie } from "../utils/cookie";

const token = getCookie("token");



const walletdata = async (): Promise<WalletDataResponse> => {
  const [walletRes, priceRes] = await Promise.all([
    api.get("UserDashboard-DeskPage/wallet-data/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    }),
    api.get("UserDashboard-DeskPage/gold-stock-price/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    }),
  ]);

  return {
    walletBalance: walletRes.data.wallet_money_data,
    goldBalance: walletRes.data.wallet_gold_data,
    buyPrice: priceRes.data.buy_price,
    sellPrice: priceRes.data.sale_price,
  };
};

//////////widhraw api///////////

const customerWithdraw = async (moneyAmount: string) => {
  const response = await api.post(
    "UserDashboard-GetRequest/get-request-money/",
    { money_amount: moneyAmount },
    {
      headers: { Authorization: `Token ${token}` },
    }
  );

  return response.data;
};

export { walletdata, customerWithdraw };
