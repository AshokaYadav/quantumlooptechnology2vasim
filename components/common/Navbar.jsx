// import { useState } from 'react';

'use client'
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <header>
      <nav className="fixed top-0 left-0 w-full py-4 px-10 flex justify-between items-center bg-black bg-opacity-80 backdrop-blur-md transition-all duration-300 z-50">
        <div className="text-2xl font-bold text-green-400 hover:text-green-300 transition-colors">
          Quantem Loop Technology
        </div>
        
        <ul className={`md:flex gap-6 ${isOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-gray-900 py-5 text-center' : 'hidden'}`}>
          <li><a href="/" className="text-white hover:text-green-400 transition-colors relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0">Home</a></li>
          <li><a href="/About" className="text-white hover:text-green-400 transition-colors relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0">About</a></li>
          <li><a href="/Service" className="text-white hover:text-green-400 transition-colors relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0">Services</a></li>
          <li><a href="/Contact" className="text-white hover:text-green-400 transition-colors relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0">Contact</a></li>
          <li><a href="/Apply" className="text-white hover:text-green-400 transition-colors relative before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0">Apply</a></li>
 
        </ul>
        
        <div 
          className="md:hidden flex flex-col gap-1.5 cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
      </nav>
    </header>
  );
}