import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux"; // Uncomment when Redux is ready

export default function Cart() {
  // Example placeholder cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Onion", price: 20, quantity: 2 },
    { id: 2, name: "Potato", price: 15, quantity: 1 },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white rounded shadow p-6">
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-3 last:border-b-0"
              >
                <div>
                  <span className="font-semibold">{item.name}</span>
                  <span className="ml-2 text-gray-500">x{item.quantity}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-onion-dark font-bold">₹{item.price * item.quantity}</span>
                  <button
                    className="text-red-500 hover:underline text-sm"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <span className="font-bold text-lg">Total:</span>
            <span className="font-bold text-onion-dark text-lg">₹{total}</span>
          </div>
          <button
            className="w-full mt-6 bg-onion-dark text-white py-2 rounded hover:bg-onion transition"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}