import { useState } from "react";
import chocolateCroissantImg from "../assets/images/bs1.jpg";
import macaronsImg from "../assets/images/bs2.jpg";
import sourdoughBreadImg from "../assets/images/bs3.jpg";
import toast, { Toaster } from "react-hot-toast";

const BestSellers = () => {
  const bestSellers = [
    {
      id: 1,
      name: "Chocolate Croissant",
      description: "Flaky pastry filled with rich chocolate.",
      price: 180,
      image: chocolateCroissantImg,
    },
    {
      id: 2,
      name: "Macarons",
      description: "French macarons with creamy filling.",
      price: 200,
      image: macaronsImg,
    },
    {
      id: 3,
      name: "Sourdough Bread",
      description: "Artisan sourdough with a crisp crust.",
      price: 350,
      image: sourdoughBreadImg,
    },
  ];

  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemName, value) => {
    if (value === "") {
      setQuantities((prev) => ({ ...prev, [itemName]: "" }));
    } else {
      const newQuantity = Math.max(1, parseInt(value) || 1);
      setQuantities((prev) => ({ ...prev, [itemName]: newQuantity }));
    }
  };

  const incrementQuantity = (itemName) => {
    setQuantities((prev) => ({
      ...prev,
      [itemName]: (prev[itemName] || 1) + 1,
    }));
  };

  const decrementQuantity = (itemName) => {
    setQuantities((prev) => ({
      ...prev,
      [itemName]: Math.max(1, (prev[itemName] || 1) - 1),
    }));
  };

  const addToCart = (item, quantity) => {
    const itemWithQuantity = { ...item, quantity };
    setCart([...cart, itemWithQuantity]);
    toast.success(`${item.name} x${quantity} added to cart!`);
  };

  return (
    <section
      id="best-sellers"
      className="w-full bg-gradient-to-b from-[#4B2B16] to-[#2C1A15] pt-12 pb-10 px-4 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#fff9e8]">
        ⋇Best Sellers⋇
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="bg-[#FCE8C1] p-6 rounded-full shadow-xl w-72 text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-[#4B2E18]">{item.name}</h3>
            <p className="text-sm text-[#6B4B2B] my-2">{item.description}</p>
            <p className="text-lg font-bold text-[#4B2E18]">Rs {item.price}</p>

            <button
              onClick={() => addToCart(item, quantities[item.name] || 1)}
              className="mt-4 bg-[#673015] text-white py-2 px-6 rounded-full hover:bg-[#4B2E18] text-sm"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Toaster for toast notifications */}
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
    </section>
  );
};

export default BestSellers;
