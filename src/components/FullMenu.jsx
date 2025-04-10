import { useState } from "react";

// Importing category images
import breadImg from "../assets/images/fm1.jpg";
import croissantImg from "../assets/images/fm2.jpg";
import cakeImg from "../assets/images/fm3.avif";
import biscuitImg from "../assets/images/fm4.jpg";

// Importing item images for all the items under each category
import sourdoughImg from "../assets/images/b1.avif";
import wholeWheatImg from "../assets/images/b2.jpg";
import multigrainImg from "../assets/images/b3.jpg";
import baguetteImg from "../assets/images/b4.jpg";
import ciabattaImg from "../assets/images/b5.jpg";
import ryeBreadImg from "../assets/images/b6.jpg";

import butterCroissantImg from "../assets/images/c1.jpg";
import chocolateCroissantImg from "../assets/images/c2.jpg";
import almondCroissantImg from "../assets/images/c3.jpg";
import cheeseCroissantImg from "../assets/images/c4.jpg";
import miniCroissantsImg from "../assets/images/c5.jpg";
import strawberryCroissantImg from "../assets/images/c6.jpg";

import redVelvetImg from "../assets/images/k1.jpg";
import chocolateFudgeImg from "../assets/images/k2.jpg";
import blackForestImg from "../assets/images/k3.jpg";
import vanillaCreamImg from "../assets/images/k4.jpg";
import cheesecakeImg from "../assets/images/k5.jpg";
import fruitCakeImg from "../assets/images/k6.jpg";

import shortbreadImg from "../assets/images/bb1.jpg";
import butterBiscuitImg from "../assets/images/bb2.jpg";
import coconutBiscuitImg from "../assets/images/bb3.jpg";
import chocolateChipImg from "../assets/images/bb4.jpg";
import almondBiscuitImg from "../assets/images/bb5.jpg";
import digestiveBiscuitImg from "../assets/images/bb6.jpg";

const categoryData = {
  Breads: [
    { name: "Sourdough", price: 350, image: sourdoughImg, description: "A tangy, flavorful bread with a crispy crust." },
    { name: "Whole Wheat", price: 300, image: wholeWheatImg, description: "Healthy and hearty with a nutty flavor." },
    { name: "Multigrain", price: 380, image: multigrainImg, description: "Packed with seeds and grains for extra crunch." },
    { name: "Baguette", price: 200, image: baguetteImg, description: "Classic French bread with a golden, crispy crust." },
    { name: "Ciabatta", price: 350, image: ciabattaImg, description: "Soft and airy with an olive oil-rich dough." },
    { name: "Rye Bread", price: 300, image: ryeBreadImg, description: "A hearty and earthy bread made with rye flour." },
  ],
  Croissants: [
    { name: "Butter Croissant", price: 150, image: butterCroissantImg, description: "Flaky and buttery, the perfect breakfast treat." },
    { name: "Chocolate Croissant", price: 180, image: chocolateCroissantImg, description: "Indulge in rich chocolate wrapped in buttery layers." },
    { name: "Almond Croissant", price: 200, image: almondCroissantImg, description: "Sweet almond paste and a crunchy topping." },
    { name: "Cheese Croissant", price: 220, image: cheeseCroissantImg, description: "Savory with a melty cheese center." },
    { name: "Mini Croissants", price: 120, image: miniCroissantsImg, description: "Small but delicious, perfect for snacking." },
    { name: "Strawberry Croissant", price: 180, image: strawberryCroissantImg, description: "A fruity twist with fresh strawberry filling." },
  ],
  Cakes: [
    { name: "Red Velvet", price: 800, image: redVelvetImg, description: "Rich and velvety with a hint of cocoa, topped with cream cheese frosting." },
    { name: "Chocolate Fudge", price: 750, image: chocolateFudgeImg, description: "Decadent and rich with a gooey chocolate center." },
    { name: "Black Forest", price: 900, image: blackForestImg, description: "Layers of chocolate sponge, cherries, and whipped cream." },
    { name: "Vanilla Cream", price: 700, image: vanillaCreamImg, description: "A light, fluffy cake filled with creamy vanilla custard." },
    { name: "Cheesecake", price: 950, image: cheesecakeImg, description: "Creamy and smooth with a buttery biscuit base." },
    { name: "Fruit Cake", price: 650, image: fruitCakeImg, description: "Packed with dried fruits and nuts, perfect for the holidays." },
  ],
  Biscuits: [
    { name: "Macarons", price: 200, image: shortbreadImg, description: "French meringue-based biscuit known for its delicate, crisp shell & chewy interior." },
    { name: "Butter Biscuit", price: 120, image: butterBiscuitImg, description: "Crispy, buttery biscuits that melt in your mouth." },
    { name: "Coconut Biscuit", price: 150, image: coconutBiscuitImg, description: "A tropical twist with shredded coconut." },
    { name: "Chocolate Chip", price: 130, image: chocolateChipImg, description: "Chewy biscuits packed with rich chocolate chips." },
    { name: "Almond Biscuit", price: 170, image: almondBiscuitImg, description: "Crispy biscuits with crunchy almond pieces." },
    { name: "Digestive Biscuit", price: 110, image: digestiveBiscuitImg, description: "A lightly sweetened, wholesome biscuit perfect with tea." },
  ],
};

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [totalPrices, setTotalPrices] = useState({});

  const openPopup = (category) => {
    setActiveCategory(category);
    const defaultQuantities = {};
    const defaultTotalPrices = {};
    categoryData[category].forEach((item) => {
      defaultQuantities[item.name] = 1;
      defaultTotalPrices[item.name] = item.price; // Initialize total price with item price
    });
    setQuantities(defaultQuantities);
    setTotalPrices(defaultTotalPrices);
  };

  const closePopup = () => setActiveCategory(null);

  const handleQuantityChange = (itemName, value) => {
    if (value === "") {
      setQuantities((prev) => ({ ...prev, [itemName]: "" })); // Allow the field to be empty
    } else {
      const newQuantity = Math.max(1, parseInt(value) || 1); // Prevent quantity from going below 1
      setQuantities((prev) => ({ ...prev, [itemName]: newQuantity }));
    }
  
    // Update total price for this item
    const itemPrice = categoryData[activeCategory].find((item) => item.name === itemName).price;
    setTotalPrices((prev) => ({
      ...prev,
      [itemName]: itemPrice * (parseInt(value) || 1), // Ensure total price is recalculated correctly
    }));
  };
  

  const handleAddToCart = (itemName) => {
    const quantity = quantities[itemName];
    const totalPrice = totalPrices[itemName];
    alert(`Added ${quantity} x ${itemName} to cart! Total: ₨ ${totalPrice}`);
  };

  return (
    <section
      id="menu"
      className="w-full bg-gradient-to-b from-[#2C1A15] to-[#4B2B16] pt-14 pb-8 px-4 md:px-16 text-white"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#fff9e8]">⊶Our Full Menu⊷</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {Object.keys(categoryData).map((category) => (
          <div
            key={category}
            className="bg-[#FCE8C1] text-[#4B2B16] rounded-full shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-between p-4"
          >
            <img
              src={
                category === "Breads"
                  ? breadImg
                  : category === "Croissants"
                  ? croissantImg
                  : category === "Cakes"
                  ? cakeImg
                  : biscuitImg
              }
              alt={category}
              className="w-32 h-32 object-cover rounded-full border-4 border-[#673015] mb-4"
            />
            <h3 className="text-xl font-bold text-center mb-2">{category}</h3>
            <p className="text-sm text-center mb-4">
              {category === "Breads"
                ? "Freshly baked artisanal breads with a variety of flavors."
                : category === "Croissants"
                ? "Flaky, buttery, and delicious croissants for every taste."
                : category === "Cakes"
                ? "Indulge in our moist and flavorful cakes for all occasions."
                : "Crispy, delightful biscuits that melt in your mouth."}
            </p>
            <button
              onClick={() => openPopup(category)}
              className="bg-[#673015] text-white px-4 py-2 rounded-full hover:bg-[#4B2B16] transition"
            >
              Show All Items
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#FFE1A5] rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-4 text-[#673015] text-3xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold text-center text-[#4B2B16] mb-6">
              {activeCategory}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categoryData[activeCategory].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#2C1A15] text-white rounded-2xl shadow-md p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                  <p className="text-sm text-[#FCE8C1] mb-4">{item.description}</p>
                  <div className="flex flex-col items-start">
                    <div className="flex items-center mb-4">
                      <p className="text-sm mr-4">₨ {totalPrices[item.name]}</p>
                      <input
                        type="number"
                        min={1}
                        value={quantities[item.name] || 1}
                        onChange={(e) =>
                          handleQuantityChange(item.name, e.target.value)
                        }
                        className="w-16 border rounded px-2 py-1 text-sm"
                      />
                    </div>
                    <button
                      onClick={() => handleAddToCart(item.name)}
                      className="bg-[#673015] text-white px-3 py-1 rounded hover:bg-[#4B2B16]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FullMenu;
