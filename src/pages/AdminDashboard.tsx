import DashboardLayout from "../components/containers/DashboardLayout";
import { AdmindrawerList } from "../constants/data";
import AdminDashboardRoutes from "../routes/AdminDashboardRoutes";

const AdminDashboard = () => {
  return (
    <div>
      <DashboardLayout drawerList={AdmindrawerList}>
        <AdminDashboardRoutes />
      </DashboardLayout>
    </div>
  );
};

export default AdminDashboard;
