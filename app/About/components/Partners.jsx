'use client'
import { useEffect, useRef } from 'react';

export default function Partners() {
  const trackRef = useRef(null);
  const partners = [
    "https://i.pinimg.com/736x/aa/a2/45/aaa245759726ab04e968b9bff4981a52.jpg",
    "https://i.pinimg.com/736x/89/0c/25/890c250fe129488a586b1a99e8b68107.jpg",
    "https://i.pinimg.com/736x/2a/05/ef/2a05ef774ca959bf9287e40c1b2377c5.jpg",
    "https://i.pinimg.com/736x/eb/19/21/eb1921c0e9b02870a4c27a9893c9b678.jpg",
    "https://i.pinimg.com/736x/0b/89/a2/0b89a290c3f5be50d3eddbf78ff29927.jpg",
    "https://i.pinimg.com/736x/64/4e/6b/644e6b1cdcd321cdd7d54a68481f3843.jpg"
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate partners for infinite loop
    track.innerHTML += track.innerHTML;

    let animation;
    const startAnimation = () => {
      let position = 0;
      const speed = 1;
      
      animation = setInterval(() => {
        position -= speed;
        if (position <= -track.scrollWidth / 2) {
          position = 0;
        }
        track.style.transform = `translateX(${position}px)`;
      }, 20);
    };

    startAnimation();

    return () => {
      clearInterval(animation);
    };
  }, []);

  return (
    <section className="py-20 px-5 md:px-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-green-400">Partners</span>
        </h2>
        <p className="text-xl mb-16 opacity-80">
          We proudly collaborate with industry leaders.
        </p>
        
        <div className="relative w-full overflow-hidden">
          <div 
            ref={trackRef}
            className="flex w-max gap-8 py-4"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-24 bg-gray-700 rounded-lg p-4 flex items-center justify-center">
                <img 
                  src={partner} 
                  alt={`Partner ${index + 1}`} 
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}