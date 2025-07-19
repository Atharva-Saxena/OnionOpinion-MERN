import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
// import { fetchProductDetails } from "../redux/actions/productActions"; // Uncomment when backend is ready

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { isAuthenticated } = useSelector(state => state.auth);
  // const { product, loading, error } = useSelector(state => state.productDetails); // Uncomment when backend is ready
  
  const [quantity, setQuantity] = useState(1);
  
  // Demo product data (remove when backend is ready)
  const demoProducts = [
    { 
      id: "1", 
      name: "Onion", 
      price: 20, 
      shelfLife: "2 weeks",
      description: "Fresh onions, perfect for all your recipes. Long shelf life and great taste.",
      calories: 40,
      isVegetarian: true,
      needsRefrigeration: false,
      readyToEat: false,
      storageInstructions: "Store in a cool, dry place with good air circulation. Do not refrigerate as it can make them soft and moldy.",
      nutritionFacts: "Rich in vitamin C, B6, and dietary fiber. Low in calories and fat."
    },
    { 
      id: "2", 
      name: "Potato", 
      price: 15, 
      shelfLife: "1 month",
      description: "Versatile potatoes, great for boiling, mashing, or roasting. A student kitchen staple.",
      calories: 77,
      isVegetarian: true,
      needsRefrigeration: false,
      readyToEat: false,
      storageInstructions: "Store in a cool, dark place. Do not refrigerate as cold temperatures convert starch to sugar.",
      nutritionFacts: "Good source of vitamin C, B6, and potassium. Contains resistant starch which aids digestion."
    },
    { 
      id: "3", 
      name: "Tomato", 
      price: 30, 
      shelfLife: "1 week",
      description: "Juicy tomatoes, perfect for salads, sandwiches, or cooking. Add flavor to any dish.",
      calories: 18,
      isVegetarian: true,
      needsRefrigeration: false,
      readyToEat: true,
      storageInstructions: "Store at room temperature away from direct sunlight. Refrigerate only when fully ripe to extend shelf life.",
      nutritionFacts: "Excellent source of vitamin C, potassium, folate, and vitamin K. Contains lycopene, a powerful antioxidant."
    },
    { 
      id: "4", 
      name: "Chicken", 
      price: 180, 
      shelfLife: "2 days",
      description: "Fresh boneless chicken pieces, perfect for quick meals. High in protein and versatile.",
      calories: 165,
      isVegetarian: false,
      needsRefrigeration: true,
      readyToEat: false,
      storageInstructions: "Must be refrigerated. Use within 2 days or freeze for longer storage. Always cook thoroughly.",
      nutritionFacts: "High in protein, low in fat. Contains B vitamins and minerals like zinc and iron."
    },
  ];
  
  // Find the product from demo data
  const product = demoProducts.find(p => p.id === id);
  
  useEffect(() => {
    // When backend is ready, uncomment this
    // dispatch(fetchProductDetails(id));
  }, [dispatch, id]);
  
  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(addToCart({...product, quantity}));
    } else {
      // Redirect to login if not authenticated
      navigate('/login?redirect=products');
    }
  };
  
  if (!product) {
    return (
      <div className="max-w-xl mx-auto py-10 px-4">
        <button
          className="mb-4 text-onion-dark hover:underline"
          onClick={() => navigate(-1)}
        >
          &larr; Back to Products
        </button>
        <div className="bg-white rounded shadow p-8 text-center">
          <p className="text-gray-500">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <button
        className="mb-4 text-onion-dark hover:underline"
        onClick={() => navigate(-1)}
      >
        &larr; Back to Products
      </button>
      
      <div className="bg-white rounded shadow p-8">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-onion-light rounded-full flex items-center justify-center text-4xl font-bold text-onion-dark mr-6">
            {product.name[0]}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-gray-600">₹{product.price}</p>
            <div className="flex items-center mt-1">
              <span className={`px-2 py-0.5 rounded-full text-xs ${product.isVegetarian ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.isVegetarian ? '🥬 Vegetarian' : '🍖 Non-Vegetarian'}
              </span>
            </div>
          </div>
        </div>
        
        <p className="mb-6">{product.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="font-semibold text-onion-dark mb-2">Product Details</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Shelf Life:</span> {product.shelfLife}
              </li>
              <li>
                <span className="font-semibold">Calories:</span> {product.calories} per serving
              </li>
              <li>
                <span className="font-semibold">Ready to Eat:</span> {product.readyToEat ? "Yes" : "No"}
              </li>
              <li>
                <span className="font-semibold">Storage:</span> {product.needsRefrigeration ? "Refrigeration required" : "Room temperature"}
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold text-onion-dark mb-2">Storage Instructions</h2>
            <p className="text-sm text-gray-700">{product.storageInstructions}</p>
            
            <h2 className="font-semibold text-onion-dark mt-4 mb-2">Nutrition</h2>
            <p className="text-sm text-gray-700">{product.nutritionFacts}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="mr-3">Quantity:</span>
            <div className="flex items-center border rounded">
              <button 
                className="px-3 py-1 border-r hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button 
                className="px-3 py-1 border-l hover:bg-gray-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          <span className="font-bold text-lg">₹{product.price * quantity}</span>
        </div>
        
        <button 
          onClick={handleAddToCart}
          className="w-full bg-onion-dark text-white py-2 rounded hover:bg-onion transition"
        >
          {isAuthenticated ? 'Add to Cart' : 'Login to Purchase'}
        </button>
      </div>
    </div>
  );
}