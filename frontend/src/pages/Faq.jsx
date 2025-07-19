import { useState } from 'react';

function Faq() {
  const [openItem, setOpenItem] = useState(null);
  
  const faqItems = [
    {
      question: "What is Onion Opinion?",
      answer: "Onion Opinion is a pocket grocer app designed for students and people with limited storage. We help you find groceries that match your specific needs, including budget constraints, storage limitations, dietary preferences, and cooking requirements."
    },
    {
      question: "How do the filters work?",
      answer: "Our filters allow you to specify if you're vegetarian, have refrigeration, prefer ready-to-eat items, and set maximum budget and calorie limits. This helps you find products that perfectly match your living situation and preferences."
    },
    {
      question: "Do I need to create an account?",
      answer: "You can browse products without an account, but you'll need to log in to add items to your cart and complete purchases. Creating an account also lets you save your filter preferences for future shopping."
    },
    {
      question: "What areas do you deliver to?",
      answer: "We currently deliver to select areas in major Indian cities, focusing on neighborhoods with high student populations. Check our Locations page to see if we deliver to your area."
    },
    {
      question: "How long will my delivery take?",
      answer: "Deliveries typically arrive within 2 hours for locations within our delivery radius. You can track your order in real-time after checkout."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI payments, and cash on delivery. Student discounts are available with valid ID."
    },
    {
      question: "How do I know if a product needs refrigeration?",
      answer: "Each product listing clearly indicates storage requirements, including whether refrigeration is needed and the expected shelf life at room temperature."
    },
    {
      question: "Can I return products if I'm not satisfied?",
      answer: "We have a no-questions-asked return policy for any items that don't meet your expectations. Simply contact customer service within 24 hours of delivery."
    }
  ];
  
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-onion-dark">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white rounded shadow overflow-hidden">
            <button
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <h2 className="text-lg font-semibold">{item.question}</h2>
              <svg
                className={`w-5 h-5 transition-transform ${openItem === index ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openItem === index && (
              <div className="p-4 pt-0 border-t">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;