import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import Pagination from "../components/Pagination";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items: products, loading, error, currentPage, totalPages } = useSelector((state) => state.products);
  const { preferences } = useSelector((state) => state.filters);
  
  // For demo purposes, if backend isn't ready
  const [demoProducts] = useState([
    { 
      id: 1, 
      name: "Onion", 
      price: 20, 
      shelfLife: "2 weeks",
      calories: 40,
      isVegetarian: true,
      needsRefrigeration: false,
      readyToEat: false
    },
    { 
      id: 2, 
      name: "Potato", 
      price: 15, 
      shelfLife: "1 month",
      calories: 77,
      isVegetarian: true,
      needsRefrigeration: false,
      readyToEat: false
    },
    { 
      id: 3, 
      name: "Tomato", 
      price: 30, 
      shelfLife: "1 week",
      calories: 18,
      isVegetarian: true,
      needsRefrigeration: false,
      readyToEat: true
    },
    { 
      id: 4, 
      name: "Chicken", 
      price: 180, 
      shelfLife: "2 days",
      calories: 165,
      isVegetarian: false,
      needsRefrigeration: true,
      readyToEat: false
    },
    { 
      id: 5, 
      name: "Bread", 
      price: 40, 
      shelfLife: "5 days",
      calories: 265,
      isVegetarian: true,
      needsRefrigeration: false,
      readyToEat: true
    },
    { 
      id: 6, 
      name: "Milk", 
      price: 60, 
      shelfLife: "3 days",
      calories: 122,
      isVegetarian: true,
      needsRefrigeration: true,
      readyToEat: true
    },
  ]);

  useEffect(() => {
    // When backend is ready, uncomment this
    // dispatch(fetchProducts(1, preferences));
  }, [dispatch, preferences]);

  const handlePageChange = (page) => {
    // When backend is ready, uncomment this
    // dispatch(fetchProducts(page, preferences));
  };

  // Filter products based on preferences (client-side filtering for demo)
  const filteredProducts = demoProducts.filter(product => {
    if (preferences.isVegetarian !== null && product.isVegetarian !== preferences.isVegetarian) {
      return false;
    }
    if (preferences.hasRefrigeration !== null && product.needsRefrigeration && !preferences.hasRefrigeration) {
      return false;
    }
    if (preferences.readyToEat !== null && product.readyToEat !== preferences.readyToEat) {
      return false;
    }
    if (preferences.maxBudget && product.price > preferences.maxBudget) {
      return false;
    }
    if (preferences.maxCalories && product.calories > preferences.maxCalories) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-1/4 w-full">
          <FilterSidebar />
        </div>
        
        {/* Product Grid */}
        <div className="md:w-3/4 w-full">
          {loading ? (
            <div className="text-center py-10">Loading products...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">{error}</div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">No products match your filters.</p>
              <button 
                onClick={() => dispatch(resetFilters())}
                className="mt-4 bg-onion-dark text-white px-4 py-2 rounded hover:bg-onion transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {/* When backend pagination is ready */}
              {/* <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
              /> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}