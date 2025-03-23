import { Route, Routes } from "react-router-dom";
import GoldWithdrawTemp from "../components/template/adminDashboard/GoldWithdrawTemp.tsx";
import CashWithdrawTemp from "../components/template/adminDashboard/CashWithdrawTemp.tsx";
import SettingTemp from "../components/template/adminDashboard/SettingTemp.tsx";
import OrdersTemp from "../components/template/adminDashboard/OrdersTemp.tsx";
import ReportsTemp from "../components/template/adminDashboard/ReportsTemp.tsx";
import Transactions from "../components/template/adminDashboard/reports/TransactionsTemp.tsx";
import HomeTemp from "../components/template/adminDashboard/HomeTemp.tsx";
import GoldBuy from "../components/template/adminDashboard/reports/GoldBuyTemp.tsx";
import GoldSale from "../components/template/adminDashboard/reports/GoldSaleTemp.tsx";
import InventoryTemp from "../components/template/adminDashboard/InventoryTemp.tsx";

const AdminDashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeTemp />} />
      <Route path="/inventory" element={<InventoryTemp />} />
      <Route path="/gold-withdraw" element={<GoldWithdrawTemp />} />
      <Route path="/cash-withdraw" element={<CashWithdrawTemp />} />
      <Route path="/orders" element={<OrdersTemp />} />
      <Route path="/reports" element={<ReportsTemp />}>
        <Route path="transactions" element={<Transactions />} />
        <Route path="gold-buy" element={<GoldBuy />} />
        <Route path="gold-sale" element={<GoldSale />} />
      </Route>
      <Route path="/setting" element={<SettingTemp />} />
    </Routes>
  );
};

export default AdminDashboardRoutes;
