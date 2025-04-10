export default function WhyChooseUs() {
    const reasons = [
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1067/1067536.png",
        title: "Expertise & Experience",
        description: "With years of experience in the industry, we deliver high-quality solutions."
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
        title: "Top-Notch Quality",
        description: "We ensure the best quality in every project with cutting-edge technologies."
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/512/892/892234.png",
        title: "24/7 Support",
        description: "We are available round the clock to assist you with your needs."
      }
    ];
  
    return (
      <section className="py-20 px-5 md:px-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-16">
          Why Choose <span className="text-green-400">Us?</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gray-700 bg-opacity-30 p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
            >
              <img 
                src={reason.icon} 
                alt={reason.title} 
                className="w-20 h-20 mx-auto mb-6 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-bold mb-4 text-green-400">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }