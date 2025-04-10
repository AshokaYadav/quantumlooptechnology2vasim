import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hello, I am ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`;
    const whatsappNumber = "919610960426";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-5 md:px-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Get in <span className="text-green-400">Touch</span>
        </h2>
        <p className="text-xl mb-12 opacity-80">
          We're here to help! Reach out to us for any queries or project discussions.
        </p>
        
        <form 
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
        >
          <div className="relative mb-8">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 border-b-2 border-gray-600 py-3 px-4 focus:border-green-400 outline-none transition-colors peer"
              required
            />
            <label 
              htmlFor="name"
              className={`absolute left-4 transition-all duration-300 ${
                formData.name 
                  ? 'top-0 text-sm text-green-400' 
                  : 'top-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-400'
              }`}
            >
              Your Name
            </label>
          </div>
          
          <div className="relative mb-8">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border-b-2 border-gray-600 py-3 px-4 focus:border-green-400 outline-none transition-colors peer"
              required
            />
            <label 
              htmlFor="email"
              className={`absolute left-4 transition-all duration-300 ${
                formData.email 
                  ? 'top-0 text-sm text-green-400' 
                  : 'top-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-400'
              }`}
            >
              Your Email
            </label>
          </div>
          
          <div className="relative mb-8">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-800 border-b-2 border-gray-600 py-3 px-4 focus:border-green-400 outline-none transition-colors h-32 peer"
              required
            ></textarea>
            <label 
              htmlFor="message"
              className={`absolute left-4 transition-all duration-300 ${
                formData.message 
                  ? 'top-0 text-sm text-green-400' 
                  : 'top-3 peer-focus:top-0 peer-focus:text-sm peer-focus:text-green-400'
              }`}
            >
              Your Message
            </label>
          </div>
          
          <button 
            type="submit"
            className="w-full py-4 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}