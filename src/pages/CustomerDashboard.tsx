
import DashboardLayout from "../components/containers/DashboardLayout";
import { drawerList } from "../constants/data";
import CustomerDashboardRoutes from "../routes/CustomerDashboardRoutes";

const CustomerDashboard = () => {


  return (
    <div>
      <DashboardLayout drawerList={drawerList}>
        <CustomerDashboardRoutes/>
      </DashboardLayout>
    </div>
  );
};

export default CustomerDashboard;
