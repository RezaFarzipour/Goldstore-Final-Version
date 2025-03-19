import { Route, Routes } from "react-router-dom";

import Deposit from "../components/template/customerdashboard/DepositTemp.tsx";
import Withdraw from "../components/template/customerdashboard/WithrawTemp.tsx";
import BuyGold from "../components/template/customerdashboard/BuyGoldTemp.tsx";
import SellGold from "../components/template/customerdashboard/SellGoldTemp.tsx";
import Reports from "../components/template/customerdashboard/ReportsTemp.tsx";
import ReceiveGold from "../components/template/customerdashboard/ReceiveGoldTemp.tsx";
import DashboardHome from "../components/template/customerdashboard/DashboardHomeTemp.tsx";

const CustomerDashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/buy-gold" element={<BuyGold />} />
      <Route path="/sell-gold" element={<SellGold />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/receive-gold" element={<ReceiveGold />} />
    </Routes>
  );
};

export default CustomerDashboardRoutes;
