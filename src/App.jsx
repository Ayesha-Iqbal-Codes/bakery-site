import { Routes, Route, useLocation } from "react-router-dom";


import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import OurStory from "./components/OurStory";
import BestSellers from "./components/BestSellers";
import FullMenu from "./components/FullMenu";
import Faqs from "./components/FAQs";
import Contactus from "./components/ContactUs";
import Footer from "./components/Footer";

import AddToCart from "./pages/AddToCart";

function HomePage() {
  return (
    <>
      <Banner />
      <OurStory />
      <BestSellers />
      <FullMenu />
      <Faqs />
      <Contactus />
    </>
  );
}

function App() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/cart";

  return (
    <div className="min-h-screen bg-[#f3e5ab] text-[#4e342e]">
     
    

      {!hideNavAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>

      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
