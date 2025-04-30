import React, { useEffect, useState } from 'react';
import logo from "../assets/images/logo.webp";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-[#2C1A15] text-white py-12 px-4 md:px-16 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center md:justify-between space-y-8 md:space-y-0 text-center md:text-left">
          
         
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Ashy Bakes Logo" className="h-32 w-auto" />
          </div>

          
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 w-full md:w-auto items-center md:items-start">
            
           
            <div className="space-y-2 max-w-xs">
              <h3 className="text-xl font-bold">About Ashy Bakes</h3>
              <p className="text-sm">
                At Ashy Bakes, we specialize in crafting delightful, fresh, and high-quality baked goods...
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-2 max-w-xs">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#best-sellers" className="text-[#FFE1A5] hover:text-white">Best Sellers</a></li>
                <li><a href="#menu" className="text-[#FFE1A5] hover:text-white">Full Menu</a></li>
                <li><a href="#contact-us" className="text-[#FFE1A5] hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            {/* Need Help */}
            <div className="space-y-2 max-w-xs">
              <h3 className="text-xl font-bold">Need Help?</h3>
              <p className="text-sm">
                If you have any questions or need assistance, feel free to reach out...
              </p>
              <a href="#contact-us" className="text-[#FFE1A5] hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>

      
        <div className="mt-12 text-center border-t border-[#FFE1A5] pt-4">
          <p className="text-sm">&copy; 2025 Ashy Bakes. All Rights Reserved.</p>
        </div>
      </footer>

      
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#FFE1A5] text-[#2C1A15] shadow-lg hover:bg-white transition-all"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Footer;
