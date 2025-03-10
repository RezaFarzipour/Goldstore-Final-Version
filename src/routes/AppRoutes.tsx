import {  Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Faq from "../page/Faq";


const AppRoutes = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/faqs" element={<Faq/>} />

        
      </Routes>
  
  );
};

export default AppRoutes;
