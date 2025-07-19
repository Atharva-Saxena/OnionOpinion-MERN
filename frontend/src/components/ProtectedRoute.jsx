import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useSelector(state => state.auth);
  
  // adding a spinner later
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  // redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // authenticated , render children
  return children;
}