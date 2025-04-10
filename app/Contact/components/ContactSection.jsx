'use client';

import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <section className=" bg-gray-100">
            {/* Contact Info */}
            <div className="flex justify-center gap-6 bg-black py-10 text-white">
  {/* Call Us */}
  <div className="bg-teal-900 p-6 rounded-lg text-center w-60">
    <div className="text-4xl mb-2">📞</div>
    <p className="font-semibold">Call Us</p>
    <p>+91 9810800428</p>
  </div>
  
  {/* Email Us */}
  <div className="bg-teal-900 p-6 rounded-lg text-center w-60">
    <div className="text-4xl mb-2">📧</div>
    <p className="font-semibold">Email Us</p>
    <p>wasimtech@gmail.com</p>
  </div>

  {/* Visit Us */}
  <div className="bg-teal-900 p-6 rounded-lg text-center w-60">
    <div className="text-4xl mb-2">📍</div>
    <p className="font-semibold">Visit Us</p>
    <p>Alwar, Rajasthan, India</p>
  </div>
</div>


            {/* Contact Form + Map */}
            <div className="bg-black text-white px-10 py-10 flex flex-col lg:flex-row gap-8">
  {/* Form */}
  <div className="w-full lg:w-1/2">
    <h2 className="text-xl font-bold text-teal-400 mb-2">GET IN TOUCH</h2>
    <p className="text-sm mb-6">Fill out the form below, and we'll get back to you soon.</p>
    
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Your Name" className="p-3 bg-teal-700 rounded" />
      <input type="email" placeholder="Your Email" className="p-3 bg-teal-700 rounded" />
      <input type="text" placeholder="Your Phone" className="p-3 bg-teal-700 rounded" />
      <textarea placeholder="Your Message" rows={4} className="p-3 bg-teal-700 rounded"></textarea>
      <button type="submit" className="bg-teal-500 text-black font-semibold w-36 py-2 rounded hover:bg-teal-400 transition-all">Send Message</button>
    </form>
  </div>

  {/* Map */}
  <div className="w-full lg:w-1/2">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.271232952066!2d76.61506607499947!3d27.172060048969596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5aa50ab76f5%3A0x7f29936204da976f!2sAlwar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1712747078917!5m2!1sen!2sin"
      width="100%"
      height="100%"
      className="min-h-[300px] rounded-lg border-none"
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</div>

        </section>
    );
};

export default ContactSection;
