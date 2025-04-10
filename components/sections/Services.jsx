export default function Services() {
    const services = [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png",
        title: "Web Development",
        description: "Building high-quality, responsive, and modern websites that drive business growth."
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1046/1046863.png",
        title: "App Development",
        description: "Creating innovative mobile applications with smooth user experience and performance."
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1038/1038591.png",
        title: "Digital Marketing",
        description: "SEO, social media marketing, and ad campaigns to grow your brand visibility."
      }
    ];
  
    return (
      <section id="services" className="py-20 px-5 md:px-10 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-16">
          Our <span className="text-green-400">Services</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-700 bg-opacity-30 p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
            >
              <img 
                src={service.icon} 
                alt={service.title} 
                className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-bold mb-4 text-green-400">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }