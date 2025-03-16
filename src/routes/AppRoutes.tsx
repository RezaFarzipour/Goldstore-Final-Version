import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Faq from "../page/Faq";
import ContactUs from "../page/ContactUs";
import SignUp from "../page/VerifyNumber";
import VerifyCode from "../page/VerifyCode";
import SignupInfo from "../page/SignupInfo";

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

      
    </Routes>
  );
};

export default AppRoutes;
