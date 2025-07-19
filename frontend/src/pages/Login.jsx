import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { login } from '../redux/actions/authActions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const { isAuthenticated, loading, error } = useSelector(state => state.auth);
  
  // Get redirect path from URL query params or default to home
  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get('redirect') || '';
  
  useEffect(() => {
    // If already authenticated, redirect
    if (isAuthenticated) {
      navigate(`/${redirect}`);
    }
  }, [isAuthenticated, navigate, redirect]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-onion-light">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-onion-dark">Login</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-onion"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-onion"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-onion-dark text-white py-2 rounded hover:bg-onion transition duration-200 disabled:bg-gray-400"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="mt-4 text-center text-sm">
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="text-onion-dark hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}