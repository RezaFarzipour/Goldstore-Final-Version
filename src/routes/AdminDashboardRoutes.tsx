import { Route, Routes } from "react-router-dom";
import SettingTemp from "../components/template/adminDashboard/SettingTemp.tsx";
import ReportsTemp from "../components/template/adminDashboard/reports/ReportsTemp.tsx";
import InventoryTemp from "../components/template/adminDashboard/InventoryTemp.tsx";
import TransactionsTemp from "../components/template/adminDashboard/reports/TransactionsTemp.tsx";
import GoldBuyTemp from "../components/template/adminDashboard/reports/GoldBuyTemp.tsx";
import GoldSaleRepTemp from "../components/template/adminDashboard/reports/GoldSaleRepTemp.tsx";
import GoldSaleTemp from "../components/template/adminDashboard/GoldSaleTemp.tsx";
import GoldWithdrawTemp from "../components/template/adminDashboard/withdraw/GoldWithdrawTemp.tsx";
import CashWithdrawTemp from "../components/template/adminDashboard/withdraw/CashWithdrawTemp.tsx";

const AdminDashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/inventory" element={<InventoryTemp />} />
      <Route path="/gold-withdraw" element={<GoldWithdrawTemp />} />
      <Route path="/cash-withdraw" element={<CashWithdrawTemp />} />
      <Route path="/reports" element={<ReportsTemp />}>
        <Route path="transactions" element={<TransactionsTemp />} />
        <Route path="gold-buy" element={<GoldBuyTemp />} />
        <Route path="gold-sale" element={<GoldSaleRepTemp />} />
      </Route>
      <Route path="/gold-sale" element={<GoldSaleTemp />} />
      <Route path="/setting" element={<SettingTemp />} />
    </Routes>
  );
};

export default AdminDashboardRoutes;
