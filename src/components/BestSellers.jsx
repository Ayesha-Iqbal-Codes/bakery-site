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
      price: "$4.25",
      image: chocolateCroissantImg,
    },
    {
      id: 2,
      name: "Macarons",
      description: "Delicate French macarons with creamy filling.",
      price: "$6.50",
      image: macaronsImg,
    },
    {
      id: 3,
      name: "Sourdough Bread",
      description: "Artisan sourdough with a crisp crust and tangy flavor.",
      price: "$5.75",
      image: sourdoughBreadImg,
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <section
      id="best-sellers"
      className="w-full bg-gradient-to-b from-[#4B2B16] to-[#2C1A15] pt-12 pb-12 px-4 md:px-16"
    >
      <h2 className="text-4xl font-extrabold text-center mb-8 text-[#D9A27D]">
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
            <h3 className="text-2xl font-bold text-[#4B2E18]">{item.name}</h3>
            <p className="text-lg text-[#6B4B2B] my-2">{item.description}</p>
            <p className="text-xl font-bold text-[#4B2E18]">{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-4 bg-[#673015] text-white py-2 px-6 rounded-full hover:bg-[#4B2E18]"
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
