import { useState } from "react";
import chocolateCroissantImg from "../assets/images/bs1.jpg"; // Replace with correct image
import macaronsImg from "../assets/images/bs2.jpg"; // Replace with correct image
import sourdoughBreadImg from "../assets/images/bs3.jpg"; // Replace with correct image

const BestSellers = () => {
  const bestSellers = [
    {
      id: 1,
      name: "Chocolate Croissant",
      description: "Flaky pastry filled with rich chocolate.",
      price: 180, // Use number for calculation
      image: chocolateCroissantImg,
    },
    {
      id: 2,
      name: "Macarons",
      description: "French macarons with creamy filling.",
      price: 200, // Use number for calculation
      image: macaronsImg,
    },
    {
      id: 3,
      name: "Sourdough Bread",
      description: "Artisan sourdough with a crisp crust.",
      price: 350, // Use number for calculation
      image: sourdoughBreadImg,
    },
  ];

  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (itemName, value) => {
    if (value === "") {
      setQuantities((prev) => ({ ...prev, [itemName]: "" })); // Allow the field to be empty
    } else {
      const newQuantity = Math.max(1, parseInt(value) || 1); // Prevent quantity from going below 1
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
    alert(`${item.name} x${quantity} added to cart!`);
  };

  return (
    <section
      id="best-sellers"
      className="w-full bg-gradient-to-b from-[#4B2B16] to-[#2C1A15] pt-12 pb-10 px-4 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#fff9e8]">
        ⋞Best Sellers⋟
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

            {/* Quantity input with increment and decrement buttons */}
            <div className="my-4 flex justify-center items-center">
              <button
                onClick={() => decrementQuantity(item.name)}
                className="bg-[#4B2B16] text-white px-3 py-1 rounded-l-md text-sm"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantities[item.name] || ""}
                onChange={(e) => handleQuantityChange(item.name, e.target.value)}
                className="w-14 p-1 text-center border-t border-b border-[#4B2B16] focus:outline-none text-sm"
              />
              <button
                onClick={() => incrementQuantity(item.name)}
                className="bg-[#4B2B16] text-white px-3 py-1 rounded-r-md text-sm"
              >
                +
              </button>
              <p className="ml-4 text-lg text-[#4B2E18]">
                Rs {item.price * (quantities[item.name] || 1)}
              </p>
            </div>

            <button
              onClick={() => addToCart(item, quantities[item.name] || 1)}
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
