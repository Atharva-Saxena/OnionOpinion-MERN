import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../redux/actions/productActions"; // Uncomment when actions are ready

export default function ProductList() {
  // const dispatch = useDispatch();
  // const { products, loading, error } = useSelector((state) => state.products);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // Placeholder data for now
  const products = [
    { id: 1, name: "Onion", price: 20, shelfLife: "2 weeks" },
    { id: 2, name: "Potato", price: 15, shelfLife: "1 month" },
    { id: 3, name: "Tomato", price: 30, shelfLife: "1 week" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow p-4 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-onion-light rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-onion-dark">
              {product.name[0]}
            </div>
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="mb-1 text-gray-600">₹{product.price}</p>
            <p className="mb-3 text-xs text-gray-400">Shelf life: {product.shelfLife}</p>
            <button className="bg-onion-dark text-white px-4 py-1 rounded hover:bg-onion transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}