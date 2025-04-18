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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verifycode" element={<VerifyCode />} />
      <Route path="/signupinfo" element={<SignupInfo />} />
      <Route path="/customerdashboard/*" element={<CustomerDashboard />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
