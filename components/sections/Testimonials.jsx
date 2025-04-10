import { useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rahul Sharma",
      quote: "Quantem Loop Technology provided us with an outstanding website. Their attention to detail and creativity is next level!"
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Pooja Verma",
      quote: "Highly professional team! The animations and design exceeded our expectations. Highly recommend!"
    },
    {
      img: "https://randomuser.me/api/portraits/men/50.jpg",
      name: "Amit Gupta",
      quote: "The best experience ever! The futuristic design and responsiveness of my website are outstanding."
    }
  ];

  useEffect(() => {
    const scrollContainer = document.querySelector('.testimonials-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('mouseup', handleMouseUp);
    scrollContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('mouseup', handleMouseUp);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 px-5 md:px-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-16 text-center">
        What Our <span className="text-green-400">Clients Say</span>
      </h2>
      
      <div className="testimonials-container flex justify-center gap-8 overflow-x-auto scroll-smooth pb-5 scrollbar-hide">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-80 bg-gray-700 bg-opacity-30 p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
          >
            <img 
              src={testimonial.img} 
              alt={testimonial.name} 
              className="w-20 h-20 rounded-full mx-auto mb-6 border-2 border-green-400"
            />
            <h3 className="text-xl font-bold mb-4 text-center text-green-400">{testimonial.name}</h3>
            <p className="text-gray-300 italic text-center">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}