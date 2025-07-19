export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-onion-light px-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-onion-dark mb-4">Onion Opinion 🧅</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your pocket grocer for students and smart shoppers! Filter groceries by budget, storage, calories, and convenience. 
          Enjoy a smooth, accessible shopping experience, no matter your kitchen setup.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="bg-onion-dark text-white px-6 py-2 rounded hover:bg-onion transition font-semibold"
          >
            Browse Products
          </a>
          <a
            href="/about"
            className="bg-onion-light border border-onion-dark text-onion-dark px-6 py-2 rounded hover:bg-onion-dark hover:text-white transition font-semibold"
          >
            About Us
          </a>
        </div>
      </div>
    </div>
  );
}