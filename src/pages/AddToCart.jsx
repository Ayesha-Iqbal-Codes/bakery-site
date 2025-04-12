import { useCart } from "../context/CartContext";
import { useState } from "react";
import toast from "react-hot-toast";

function AddToCart() {
  const { cartItems, removeFromCart, clearCart, updateCartItemQuantity } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pickupTime: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.pickupTime) {
      toast.error("Please fill in all required fields.");
      return;
    }

    console.log("Order submitted:", {
      customerDetails: form,
      cartItems,
    });

    toast.success("Order placed! We’ll have it ready for pickup.");
    clearCart();
    setForm({ name: "", email: "", phone: "", pickupTime: "" });
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#f3e5ab] text-[#4e342e] px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-sm">
                      Rs {item.price} × {item.quantity} = Rs{" "}
                      {item.price * item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.quantity - 1)
                      }
                      className="bg-[#4e342e] text-white px-2 py-1 rounded text-sm"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.quantity + 1)
                      }
                      className="bg-[#4e342e] text-white px-2 py-1 rounded text-sm"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-600 hover:underline ml-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="text-right mb-8 font-semibold text-lg">
              Total: Rs {total}
            </div>

            {/* Customer Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Pickup Details</h2>

              <div>
                <label className="block font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md border"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md border"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Email (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md border"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">
                  Preferred Pickup Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  value={form.pickupTime}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md border"
                />
              </div>

              {/* Pickup Note */}
              <div className="bg-[#fff9e5] border border-yellow-300 rounded-lg p-4 text-sm">
                <p>
                  <strong>Note:</strong> Orders can only be{" "}
                  <span className="font-semibold">picked up from the store</span>{" "}
                  — no delivery or cash on delivery available.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#4e342e] text-white px-6 py-2 rounded-lg hover:bg-[#3e2723] transition"
              >
                Confirm Pickup Order
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default AddToCart;
