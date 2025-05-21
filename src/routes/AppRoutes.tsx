import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Faq from "../pages/Faq";
import ContactUs from "../pages/ContactUs";
import SignUp from "../pages/VerifyNumber";
import VerifyCode from "../pages/VerifyCode";
import SignupInfo from "../pages/SignupInfo";
import CustomerDashboard from "../pages/CustomerDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../pages/404";
import ProtectedRoute from "../components/element/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route
        path="/signup"
        element={
          <ProtectedRoute guestOnly>
            <SignUp />
          </ProtectedRoute>
        }
      />
      <Route
        path="/verifycode"
        element={
          <ProtectedRoute guestOnly>
            <VerifyCode />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signupinfo"
        element={
          <ProtectedRoute guestOnly >
            <SignupInfo />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customerdashboard/*"
        element={
          <ProtectedRoute allowedUserType="customer" redirectTo="/admin">
            <CustomerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/*"
        element={
          <ProtectedRoute
            allowedUserType="admin"
            redirectTo="/customerdashboard"
          >
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
