import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity, clearCart } from "../redux/actions/cartActions";

export default function Cart() {
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      // This would be handled by an action in a real app
      // dispatch(loadCart(JSON.parse(savedCart)));
    }
  }, []);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity(id, quantity));
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      window.location.href = '/login?redirect=cart';
      return;
    }
    
    // Proceed with checkout
    alert('Checkout functionality will be implemented soon!');
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 mb-4">Your cart is empty.</p>
          <Link 
            to="/products" 
            className="inline-block bg-onion-dark text-white px-4 py-2 rounded hover:bg-onion transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded shadow p-6">
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-3 last:border-b-0"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-onion-light rounded-full flex items-center justify-center text-sm font-bold text-onion-dark mr-3">
                    {item.name[0]}
                  </div>
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <div className="text-sm text-gray-500">₹{item.price} each</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded">
                    <button 
                      className="px-2 py-1 border-r hover:bg-gray-100"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button 
                      className="px-2 py-1 border-l hover:bg-gray-100"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <span className="text-onion-dark font-bold w-16 text-right">₹{item.price * item.quantity}</span>
                  
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
          
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => dispatch(clearCart())}
              className="sm:w-1/3 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition"
            >
              Clear Cart
            </button>
            
            <button
              onClick={handleCheckout}
              className="sm:w-2/3 bg-onion-dark text-white py-2 rounded hover:bg-onion transition"
              disabled={cartItems.length === 0}
            >
              {isAuthenticated ? 'Proceed to Checkout' : 'Login to Checkout'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}