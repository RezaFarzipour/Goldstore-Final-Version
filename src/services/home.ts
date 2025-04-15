import api from "../configs/api";

export const HomeGoldStockPrice = async () => {
    const response = await api.get("Home/gold-stock-price/");
    return response.data;
};