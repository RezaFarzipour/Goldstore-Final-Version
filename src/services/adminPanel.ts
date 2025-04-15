import api from "../configs/api";

// Inventory:
export const usersInformationList = async () => {
    const response = await api.get("AdminDashboard-DeskPage/users-information-list/");
    return response.data;
};

export const changeUserWalletMoneyAmount = async (cashAmount: string, cashModalAmount: string) => {
    const response = await api.post("AdminDashboard-DeskPage/change-user-wallet-money-amount/", {
        phone_number: cashAmount,
        money_amount: cashModalAmount,
    });
    return response.data;
};

export const changeUserWalletGoldAmount = async (goldAmount: string, goldModalAmount: string) => {
    const response = await api.post("AdminDashboard-DeskPage/change-user-wallet-gold-amount/", {
        phone_number: goldAmount,
        gold_amount: goldModalAmount,
    });
    return response.data;
};


// Admin & Gold Withdraw: 
export const goldGetRequestList = async () => {
    const response = await api.get("AdminDashboard-GetRequest/gold-get-request-list/");
    return response.data;
};
export const moneyGetRequestList = async () => {
    const response = await api.get("AdminDashboard-GetRequest/money-get-request-list/");
    return response.data;
};

export const proveMoneyGetRequest = async (unAccCustomerId: string, type: string) => {
    const response = await api.post("AdminDashboard-GetRequest/prove-money-get-request/", {
        get_request_id: unAccCustomerId,
        request_type: type
    });
    return response.data;
};
export const proveGoldGetRequest = async (unAccCustomerId: string, type: string) => {
    const response = await api.post("AdminDashboard-GetRequest/prove-gold-get-request/", {
        get_request_id: unAccCustomerId,
        request_type: type
    });
    return response.data;
};


// Transactions:
export const transactionList = async () => {
    const response = await api.get("AdminDashboard-Transaction/transaction-list/");
    return response.data;
};

// BuySale:
export const BuyList = async () => {
    const response = await api.get("AdminDashboard-BuySale/buy-list/");
    return response.data;
};

export const SaleList = async () => {
    const response = await api.get("AdminDashboard-BuySale/sale-list/");
    return response.data;
};
export const proveSaleRequest = async (unAccCustomerId: string, type: string) => {
    const response = await api.post("AdminDashboard-BuySale/prove-sale-request/", {
        get_request_id: unAccCustomerId,
        request_type: type
    });
    return response.data;
};

//setting:
export const settingData = async () => {
    const response = await api.get("AdminDashboard-Setting/setting-data/");
    return response.data;

};

export const switchData = async () => {
    const response = await api.get("AdminDashboard-Setting/open-close-stock/");
    return response.data;

};
export const changeGoldPrice = async (addingPrice: string,) => {
    const response = await api.post("AdminDashboard-Setting/change-gold-price/", {
        gold_price: addingPrice,
    });
    return response.data;
};

export const changeWarehouseGoldAmount = async (goldPrice: string,) => {
    const response = await api.post("AdminDashboard-Setting/change-warehouse-gold-amount/", {
        gold_amount: goldPrice,
    });
    return response.data;
};

export const changePriceDifference = async (priceDifference: string,) => {
    const response = await api.post("AdminDashboard-Setting/change-price-difference/", {
        price_difference: priceDifference,
    });
    return response.data;
};