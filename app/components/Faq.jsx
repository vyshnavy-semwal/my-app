import React, { useState } from "react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12" id="faq">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 bg-white shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-medium text-lg flex justify-between items-center"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
