import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const { items } = useSelector(state => state.cart);
  
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
  
  const handleLogout = () => {
    dispatch(logout());
  };
  
  return (
    <nav className="bg-onion-dark text-white px-4 md:px-6 py-4 shadow">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl flex items-center">
          <img src="/onionOpinion.svg" alt="Onion Opinion Logo" className="w-8 h-8 mr-2" />
          <span>Onion Opinion</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <div className={`w-full md:flex md:w-auto md:items-center ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 gap-3 md:gap-6">
            <Link to="/products" className="text-white hover:text-onion-light py-2 md:py-0">Products</Link>
            <Link to="/locations" className="text-white hover:text-onion-light py-2 md:py-0">Locations</Link>
            <Link to="/faq" className="text-white hover:text-onion-light py-2 md:py-0">FAQ</Link>
            <Link to="/about" className="text-white hover:text-onion-light py-2 md:py-0">About Us</Link>
            
            {/* Cart with item count */}
            <Link to="/cart" className="text-white hover:text-onion-light py-2 md:py-0 relative">
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-white text-onion-dark text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            {/* Auth Links */}
            {isAuthenticated ? (
              <div className="relative group py-2 md:py-0">
                <button className="text-white hover:text-onion-light flex items-center">
                  {user?.name?.split(' ')[0] || 'Account'}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-onion-light">Profile</Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-onion-light"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <Link to="/login" className="text-white hover:text-onion-light py-2 md:py-0">Login</Link>
                <Link to="/register" className="bg-white text-onion-dark px-4 py-1 rounded hover:bg-onion-light transition">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}