'use client'
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    // Handle form submission (e.g., send to API or email service)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="py-16 px-5 md:px-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Get in <span className="text-green-400">Touch</span>
          </h2>
          <p className="mb-8 text-gray-300">
            Fill out the form below, and we'll get back to you soon.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-gray-800 border-b-2 border-gray-600 py-3 px-4 focus:border-green-400 outline-none transition-colors"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-gray-800 border-b-2 border-gray-600 py-3 px-4 focus:border-green-400 outline-none transition-colors"
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full bg-gray-800 border-b-2 border-gray-600 py-3 px-4 focus:border-green-400 outline-none transition-colors"
              />
            </div>
            
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-gray-800 border-b-2 border-gray-600 py-3 px-4 focus:border-green-400 outline-none transition-colors h-32"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Map */}
        <div className="lg:w-1/2 h-96 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71391.74973022337!2d76.57617191894633!3d27.55351170333947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397299bc678c1d6b%3A0x65bb7b5a8827a90c!2sAlwar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1711456789012"
            className="w-full h-full rounded-xl border-2 border-gray-700"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}