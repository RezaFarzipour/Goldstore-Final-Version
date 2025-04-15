import { Route, Routes } from "react-router-dom";
import GoldWithdrawTemp from "../components/template/adminDashboard/withdraw/GoldWithdrawTemp.tsx";
import CashWithdrawTemp from "../components/template/adminDashboard/withdraw/CashWithdrawTemp.tsx";
import SettingTemp from "../components/template/adminDashboard/SettingTemp.tsx";
import ReportsTemp from "../components/template/adminDashboard/reports/ReportsTemp.tsx";
import Transactions from "../components/template/adminDashboard/reports/TransactionsTemp.tsx";
import GoldBuy from "../components/template/adminDashboard/reports/GoldBuyTemp.tsx";
import GoldSale from "../components/template/adminDashboard/GoldSaleTemp.tsx";
import InventoryTemp from "../components/template/adminDashboard/InventoryTemp.tsx";
import Withdraw from "../components/template/adminDashboard/withdraw/Withdraw.tsx";

const AdminDashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/inventory" element={<InventoryTemp />} />
      <Route path="/withdraw" element={<Withdraw />}>
        <Route path="gold-withdraw" element={<GoldWithdrawTemp />} />
        <Route path="cash-withdraw" element={<CashWithdrawTemp />} />
      </Route>
      <Route path="/reports" element={<ReportsTemp />}>
        <Route path="transactions" element={<Transactions />} />
        <Route path="gold-buy" element={<GoldBuy />} />
      </Route>
      <Route path="gold-sale" element={<GoldSale />} />
      <Route path="/setting" element={<SettingTemp />} />
    </Routes>
  );
};

export default AdminDashboardRoutes;
