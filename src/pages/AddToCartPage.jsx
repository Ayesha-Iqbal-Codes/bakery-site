import { useState } from "react";
import chocolateCroissantImg from "../assets/images/bs1.jpg";
import macaronsImg from "../assets/images/bs2.jpg";
import sourdoughBreadImg from "../assets/images/bs3.jpg";

const AddToCartPage = () => {
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
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: "",
  });

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your order has been placed! You can pick it up after an hour.");
  };

  return (
    <section
      id="add-to-cart"
      className="w-full bg-gradient-to-b from-[#4B2B16] to-[#2C1A15] pt-12 pb-10 px-4 md:px-16"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#fff9e8]">
        ⋞Add to Cart⋟
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

      <div className="mt-12 flex justify-between">
        <div className="w-1/3 bg-[#F8D9B9] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#4B2E18] mb-4">Order Summary</h3>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="mb-4">
                <p className="text-[#4B2E18]">
                  {item.name} x {item.quantity} - Rs {item.price * item.quantity}
                </p>
              </div>
            ))
          ) : (
            <p className="text-[#4B2E18]">No items in cart</p>
          )}
          <p className="text-lg font-bold text-[#4B2E18] mt-4">
            Total: Rs {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
          </p>
          <p className="mt-4 text-[#4B2E18]">Your order can only be picked up after an hour.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-1/3 bg-[#F8D9B9] p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold text-[#4B2E18] mb-4">Your Details</h3>
          <input
            type="text"
            placeholder="Name"
            value={userDetails.name}
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
            className="w-full p-2 mb-4 border border-[#4B2B16] rounded-md"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={userDetails.phone}
            onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
            className="w-full p-2 mb-4 border border-[#4B2B16] rounded-md"
          />
          <textarea
            placeholder="Address"
            value={userDetails.address}
            onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
            className="w-full p-2 mb-4 border border-[#4B2B16] rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#673015] text-white py-2 px-6 rounded-full hover:bg-[#4B2E18]"
          >
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddToCartPage;
