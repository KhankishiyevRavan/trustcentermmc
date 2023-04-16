import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Homepage from "./page/Homepage";
import "./FontAwesome";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./page/Service";
import Portfolio from "./page/Portfolio";
import Blogs from "./page/Blogs";
import ContactUs from "./page/ContactUs";
import AboutUs from "./page/AboutUs";
import ServiceDetail from "./page/ServiceDetail";
import BlogDetail from "./page/BlogDetail";
import { useEffect } from "react";
import PortfolioDetail from "./page/PortfolioDetail";
import Order from "./page/Order";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App">
      {location.pathname !== "/order" && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/service" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      {location.pathname !== "/order" && <Footer />}
    </div>
  );
}

export default App;
