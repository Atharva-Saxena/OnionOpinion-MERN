import { useParams, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux"; // Uncomment when using Redux

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Placeholder product data
  const product = {
    id,
    name: "Onion",
    price: 20,
    shelfLife: "2 weeks",
    description: "Fresh onions, perfect for all your recipes. Long shelf life and great taste.",
    calories: 40,
    readyToEat: false,
    veg: true,
  };

  // // Example with Redux:
  // const product = useSelector((state) =>
  //   state.products.items.find((p) => p.id === Number(id))
  // );

  return (
    <div className="max-w-xl mx-auto py-10">
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
            <p className="text-xs text-gray-400">Shelf life: {product.shelfLife}</p>
          </div>
        </div>
        <p className="mb-4">{product.description}</p>
        <ul className="mb-6 text-sm text-gray-700">
          <li>
            <span className="font-semibold">Calories:</span> {product.calories}
          </li>
          <li>
            <span className="font-semibold">Ready to Eat:</span> {product.readyToEat ? "Yes" : "No"}
          </li>
          <li>
            <span className="font-semibold">Type:</span> {product.veg ? "Vegetarian" : "Non-Vegetarian"}
          </li>
        </ul>
        <button className="w-full bg-onion-dark text-white py-2 rounded hover:bg-onion transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}