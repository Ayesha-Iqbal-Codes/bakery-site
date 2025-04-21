import React from 'react';
import logo from "../assets/images/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#2C1A15] text-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center md:justify-between space-y-8 md:space-y-0 text-center md:text-left">
        
        {/* Bakery Logo Section */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Ashy Bakes Logo" className="h-32 w-auto" />
        </div>

        {/* Footer Sections */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 w-full md:w-auto items-center md:items-start">
          
          {/* About Ashy Bakes */}
          <div className="space-y-2 max-w-xs">
            <h3 className="text-xl font-bold">About Ashy Bakes</h3>
            <p className="text-sm">
              At Ashy Bakes, we specialize in crafting delightful, fresh, and high-quality baked goods. From artisan breads to decadent cakes, each item is made with love and the finest ingredients. Experience the joy of warm, freshly baked goods at our store in I-8 Markaz, Islamabad. Taste the difference with every bite!
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
              If you have any questions or need assistance, feel free to reach out to us. We are here to help and make your experience enjoyable.
            </p>
            <a href="#contact-us" className="text-[#FFE1A5] hover:text-white">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center border-t border-[#FFE1A5] pt-4">
        <p className="text-sm">&copy; 2025 Ashy Bakes. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
