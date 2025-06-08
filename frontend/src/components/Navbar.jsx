import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-onion-dark text-black px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="font-bold text-xl">Onion Opinion</Link>
      <div className="space-x-4">
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/locations" className="hover:underline">Locations</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
        <Link to="/faq" className="hover:underline">FAQ</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );

}