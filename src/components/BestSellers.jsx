import { useState } from "react";
import { useCart } from "../context/CartContext"; // 🔁 Use global cart context
import chocolateCroissantImg from "../assets/images/bs1.jpg";
import macaronsImg from "../assets/images/bs2.jpg";
import sourdoughBreadImg from "../assets/images/bs3.jpg";

const BestSellers = () => {
  const { addToCart } = useCart(); // 🔁 Hook from global cart

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

  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemId, value) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: value === "" ? "" : Math.max(1, parseInt(value) || 1),
    }));
  };

  const incrementQuantity = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 1) + 1,
    }));
  };

  const decrementQuantity = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, (prev[itemId] || 1) - 1),
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    const itemWithQuantity = { ...item, quantity };
    addToCart(itemWithQuantity); // 🔁 Global cart update
    alert(`${item.name} x${quantity} added to cart!`);
  };

  return (
    <section
      id="best-sellers"
      className="w-full bg-gradient-to-b from-[#4B2B16] to-[#2C1A15] pt-12 pb-10 px-4 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#fff9e8]">
        ⋞ Best Sellers ⋟
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="bg-[#F8D9B9] p-6 rounded-full shadow-xl w-72 text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-bold text-[#4B2E18]">{item.name}</h3>
            <p className="text-sm text-[#6B4B2B] my-2">{item.description}</p>
            <p className="text-lg font-bold text-[#4B2E18]">Rs {item.price}</p>

            {/* Quantity Control */}
            <div className="my-4 flex justify-center items-center">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="bg-[#4B2B16] text-white px-3 py-1 rounded-l-md text-sm"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantities[item.id] || ""}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                className="w-14 p-1 text-center border-t border-b border-[#4B2B16] focus:outline-none text-sm"
              />
              <button
                onClick={() => incrementQuantity(item.id)}
                className="bg-[#4B2B16] text-white px-3 py-1 rounded-r-md text-sm"
              >
                +
              </button>
              <p className="ml-4 text-lg text-[#4B2E18]">
                Rs {item.price * (quantities[item.id] || 1)}
              </p>
            </div>

            <button
              onClick={() => handleAddToCart(item)}
              className="mt-4 bg-[#673015] text-white py-2 px-6 rounded-full hover:bg-[#4B2E18] text-sm"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
