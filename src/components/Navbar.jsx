import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.webp"; // Import your logo image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Our Story", link: "#story" },
    { name: "Best Sellers", link: "#bestsellers" },
    { name: "Full Menu", link: "#menu" },
    { name: "FAQs", link: "#faqs" },
    { name: "Contact Us", link: "#contact" },
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolling ? "bg-transparent" : "bg-[#3e2723]"
      } text-white shadow-lg transition-all duration-300 backdrop-blur-md`}
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={logo} alt="Ashy Bakes Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold">Ashy Bakes</h1>
        </div>

        {/* Desktop Navbar Items */}
        <div className="hidden md:flex gap-6 justify-center flex-grow">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-[#f3e5ab] transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#3e2723] px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-white hover:text-[#f3e5ab]"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
