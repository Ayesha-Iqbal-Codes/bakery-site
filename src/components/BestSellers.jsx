import { useState } from "react";
import chocolateCroissantImg from "../assets/images/bs1.jpg";
import macaronsImg from "../assets/images/bs2.jpg";
import sourdoughBreadImg from "../assets/images/bs3.jpg";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../context/CartContext"; 

const BestSellers = () => {
  const { addToCart } = useCart(); 

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

  const handleQuantityChange = (itemName, value) => {
    if (value === "") {
      setQuantities((prev) => ({ ...prev, [itemName]: "" }));
    } else if (!isNaN(value)) {
      setQuantities((prev) => ({ ...prev, [itemName]: parseInt(value) }));
    }
  };
  
  const handleBlur = (itemName) => {
    if (!quantities[itemName] || quantities[itemName] < 1) {
      setQuantities((prev) => ({ ...prev, [itemName]: 1 }));
    }
  };
  

  const handleAddToCart = (item) => {
    const quantity = quantities[item.name] || 1;
    addToCart({ ...item, quantity }); 
    toast.success(`${item.name} x${quantity} added to cart!🛒`);
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

            {/* Price and Quantity Control */}
            <div className="flex items-center justify-center gap-4 mt-2">
              <p className="text-lg font-bold text-[#4B2E18]">
                Rs {item.price * (quantities[item.name] || 1)}
              </p>

              {/* Quantity input */}
              <input
  type="number"
  min="1"
  className="w-16 text-center rounded-md border border-gray-300 px-2 py-1 text-black"
  value={quantities[item.name] === "" ? "" : quantities[item.name] || 1}
  onChange={(e) =>
    handleQuantityChange(item.name, e.target.value)
  }
  onBlur={() => handleBlur(item.name)}
/>


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
