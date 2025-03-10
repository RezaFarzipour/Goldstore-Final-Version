import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";


const AppRoutes = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<About/>} />
        
      </Routes>
  
  );
};

export default AppRoutes;
