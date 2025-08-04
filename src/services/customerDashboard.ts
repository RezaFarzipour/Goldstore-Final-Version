import api from "../configs/api";
import { BuyGoldData, BuyGoldResult, WalletDataResponse } from "../types";

const walletdata = async (): Promise<WalletDataResponse> => {
  const [walletRes, priceRes] = await Promise.all([
    api.get("UserDashboard-DeskPage/wallet-data/"),
    api.get("UserDashboard-DeskPage/gold-stock-price/"),
  ]);

  return {
    walletBalance: walletRes.data.wallet_money_data,
    goldBalance: walletRes.data.wallet_gold_data,
    buyPrice: priceRes.data.buy_price,
    sellPrice: priceRes.data.sale_price,
  };
};

const customerReports = async () => {
  const [depositRep, widhrawRep, buyRep, sellRep] = await Promise.all([
    api.get("UserDashboard-UserReporting/transaction-report/"),
    api.get("UserDashboard-UserReporting/get-money-request-report/"),
    api.get("UserDashboard-UserReporting/buy-gold-report/"),
    api.get("UserDashboard-UserReporting/sale-gold-report/"),
  ]);

  return {
    depositRep: depositRep.data,
    widhrawRep: widhrawRep.data,
    buyRep: buyRep.data,
    sellRep: sellRep.data,
  };
};

//////////widhraw api///////////

const customerWithdraw = async (moneyAmount: string) => {
  const response = await api.post(
    "UserDashboard-GetRequest/get-request-money/",
    { money_amount: moneyAmount }
  );

  return response.data;
};

//buy gold api

const buyGold = async (goldAmount: string): Promise<BuyGoldResult> => {
  const response = await api.post<BuyGoldData>(
    "UserDashboard-GoldBuySale/buy-gold/",
    {
      gold_amount: parseFloat(goldAmount),
    }
  );
  return {
    data: response.data,
    status: response.status,
  };
};

const sellgold = async (goldAmount: string): Promise<BuyGoldResult> => {
  const response = await api.post<BuyGoldData>(
    "UserDashboard-GoldBuySale/sale-gold/",
    {
      gold_amount: parseFloat(goldAmount),
    }
  );

  return {
    data: response.data,
    status: response.status,
  };
};

const receiveGold = async (goldAmount: string) => {
  await api.post("UserDashboard-GetRequest/get-request-gold/", {
    gold_amount: parseFloat(goldAmount),
  });
};

//edit profile

export const GetUserData = async () => {
  return await api.get("Authentication/sign-up/");
};

 const UpdateUserProfile = async (inputInfo: object) => {

  return await api.patch("Authentication/sign-up/", {
    ...inputInfo,
  });
};

export {
  walletdata,
  customerWithdraw,
  buyGold,
  sellgold,
  receiveGold,
  customerReports,
  UpdateUserProfile
};
