import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Faq from "../page/Faq";
import ContactUs from "../page/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;
