import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import { useCart } from "../context/CartContext"; // ⬅️ Import cart context

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { cartItems } = useCart(); // ⬅️ Get cart items from context
  const cartCount = cartItems.length;

  const navItems = [
    { name: "Home", link: "home" },
    { name: "Our Story", link: "ourstory" },
    { name: "Best Sellers", link: "best-sellers" },
    { name: "Full Menu", link: "menu" },
    { name: "FAQs", link: "faqs" },
    { name: "Contact Us", link: "contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolling ? "bg-transparent" : "bg-gradient-to-b from-[#2c1a15] to-[#3e2723]"
      } text-white shadow-lg transition-all duration-300 backdrop-blur-md`}
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-2 z-10">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={logo} alt="Ashy Bakes Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold">Ashy Bakes</h1>
        </div>

        {/* Center Nav */}
        <div className="hidden md:flex gap-6 justify-center flex-grow z-10">
          {navItems.map((item) =>
            isHomePage ? (
              <button
                key={item.name}
                onClick={() => handleScrollToSection(item.link)}
                className="text-[#FFE1A5] hover:text-white transition duration-300"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={`/#${item.link}`}
                className="text-[#FFE1A5] hover:text-white transition duration-300"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Cart Icon */}
        <div className="relative z-10 ml-4">
          <Link to="/cart" className="text-[#FFE1A5] hover:text-white transition duration-300 relative">
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-10 ml-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#2c1a15] to-[#3e2723] px-4 pb-4">
          {navItems.map((item) =>
            isHomePage ? (
              <button
                key={item.name}
                onClick={() => handleScrollToSection(item.link)}
                className="block py-2 text-[#FFE1A5] hover:text-white w-full text-left"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={`/#${item.link}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-[#FFE1A5] hover:text-white"
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-[#FFE1A5] hover:text-white"
          >
            Cart ({cartCount})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
