import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // ✅ Toast provider

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
      {/* ✅ Toast Container */}
      <Toaster
        position="top-center" // Toast in the center of the screen
        toastOptions={{
          duration: 10000, // Display for 10 seconds
          style: {
            background: "#4e342e", // Optional: set background color for the toast
            color: "#f3e5ab", // Optional: set text color
            borderRadius: "8px", // Optional: rounded corners for the toast
            padding: "12px 24px", // Optional: add padding for better appearance
          },
        }}
      />

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
