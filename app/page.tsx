
'use client'
import { useEffect } from 'react';
// import Navbar from './components/common/Navbar';
// import Hero from './components/sections/Hero';
// import About from './components/sections/About';
// import Services from './components/sections/Services';
// import WhyChooseUs from './components/sections/WhyChooseUs';
// import Testimonials from './components/sections/Testimonials';
// import Achievements from './components/sections/Achievements';
// import Portfolio from './components/sections/Portfolio';
// import Pricing from './components/sections/Pricing';
// import FAQ from './components/sections/FAQ';
// import Contact from './components/sections/Contact';
// import Footer from './components/common/Footer';
import Navbar from '../components/common/Navbar';
// import Hero from '../components/sections/Hero';
import Footer from '../components/common/Footer';
import About from '../components/sections/About';
import Servies from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonials';
import Achievements from '../components/sections/Achievements';
import Portfolio from '../components/sections/Portfolio';
import Pricing from '../components/sections/WhyChooseUs';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export default function App() {
  
  // Scroll animations
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-fadeIn, .animate-fadeInLeft, .animate-fadeInRight');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on mount
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Servies/>
      <WhyChooseUs/>
      <Testimonials />
      <Achievements />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}