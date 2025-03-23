import DashboardLayout from "../components/containers/DashboardLayout";
import { CustomerdrawerList } from "../constants/data";
import CustomerDashboardRoutes from "../routes/CustomerDashboardRoutes";

const CustomerDashboard = () => {
  return (
    <div>
      <DashboardLayout drawerList={CustomerdrawerList}>
        <CustomerDashboardRoutes />
      </DashboardLayout>
    </div>
  );
};

export default CustomerDashboard;
