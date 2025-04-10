'use client'
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer web development, app development, digital marketing, and branding solutions tailored to your business."
    },
    {
      question: "How long does a project take?",
      answer: "Project timelines vary depending on complexity, but a standard website takes around 2-4 weeks to complete."
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Yes! We provide free support for a specified period, and you can opt for extended support plans."
    },
    {
      question: "How can I get a quote for my project?",
      answer: "Simply contact us through our website, and we will provide a custom quote based on your requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-5 md:px-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-16 text-center">
        Frequently Asked <span className="text-green-400">Questions</span>
      </h2>
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="mb-4 bg-gray-700 bg-opacity-30 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button 
              className="w-full flex justify-between items-center p-6 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span className={`text-2xl transition-transform duration-300 ${
                activeIndex === index ? 'transform rotate-45' : ''
              }`}>
                +
              </span>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}