import api from "../configs/api";

export const usersInfo = async () => {
    const response = await api.get("UserDashboard-DeskPage/wallet-data/");
    return response.data;
};


// Inventory:
export const usersInformationList = async () => {
    const response = await api.get("AdminDashboard-DeskPage/users-information-list/");
    return response.data;
};

export const changeUserWalletMoneyAmount = async (phone_number: string, money_amount: string) => {
    const response = await api.post("AdminDashboard-DeskPage/change-user-wallet-money-amount/", {

        phone_number: phone_number,
        money_amount: money_amount,
    });
    return response.data;
};

export const changeUserWalletGoldAmount = async (phone_number: string, gold_amount: string) => {
    const response = await api.post("AdminDashboard-DeskPage/change-user-wallet-gold-amount/", {
        phone_number,
        gold_amount,
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

export const proveMoneyGetRequest = async (get_request_id: string, request_type: string) => {
    const response = await api.post("AdminDashboard-GetRequest/prove-money-get-request/", {
        get_request_id,
        request_type
    });
    return response.data;
};
export const proveGoldGetRequest = async (get_request_id: string, request_type: string) => {
    const response = await api.post("AdminDashboard-GetRequest/prove-gold-get-request/", {
        get_request_id,
        request_type
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
export const proveSaleRequest = async (sale_request_id: string, prove_status: string) => {
    const response = await api.post("AdminDashboard-BuySale/prove-sale-request/", {
        sale_request_id, prove_status
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