import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(state => state.auth);
  
  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(addToCart(product));
    } else {
      // Redirect to login if not authenticated
      window.location.href = '/login?redirect=products';
    }
  };
  
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <div className="w-20 h-20 bg-onion-light rounded-full mb-4 mx-auto flex items-center justify-center text-2xl font-bold text-onion-dark">
        {product.name[0]}
      </div>
      
      <h2 className="text-lg font-semibold mb-2 text-center">{product.name}</h2>
      
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-600">₹{product.price}</span>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
          {product.isVegetarian ? '🥬 Veg' : '🍖 Non-Veg'}
        </span>
      </div>
      
      <div className="text-xs text-gray-500 mb-3">
        <div className="flex justify-between">
          <span>Shelf life: {product.shelfLife}</span>
          <span>{product.calories} cal</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>{product.needsRefrigeration ? '❄️ Refrigerate' : '🧳 No Fridge'}</span>
          <span>{product.readyToEat ? '🍽️ Ready' : '🍳 Cook'}</span>
        </div>
      </div>
      
      <div className="mt-auto flex gap-2">
        <Link 
          to={`/products/${product.id}`}
          className="flex-1 text-center text-onion-dark border border-onion-dark px-2 py-1 rounded text-sm hover:bg-onion-light transition"
        >
          Details
        </Link>
        <button 
          onClick={handleAddToCart}
          className="flex-1 bg-onion-dark text-white px-2 py-1 rounded text-sm hover:bg-onion transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}