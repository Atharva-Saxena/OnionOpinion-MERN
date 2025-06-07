export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-onion-light px-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-onion-dark mb-4">About Onion Opinion</h1>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Onion Opinion</span> is your pocket grocer, designed especially for students and smart shoppers who want to manage groceries with ease and flexibility.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to make grocery shopping simple, affordable, and tailored to your unique needs—whether you have a tight budget, limited storage, or specific dietary preferences.
        </p>
        <ul className="text-left text-gray-700 mb-4 list-disc list-inside">
          <li>🧅 Filter groceries by budget, storage, calories, and convenience</li>
          <li>🛒 Browse and order online, with secure authentication</li>
          <li>📦 See shelf life and storage tips for every item</li>
          <li>🗺️ Check delivery locations on our interactive map</li>
          <li>💡 Find answers in our FAQ or reach out to us anytime</li>
        </ul>
        <p className="text-gray-500">
          Built with love by students, for students. Inspired by the humble onion—layered, versatile, and essential!
        </p>
      </div>
    </div>
  );
}