export default function CoreValues() {
    const values = [
      {
        icon: "💡",
        title: "Innovation",
        description: "We push boundaries with creativity and futuristic solutions."
      },
      {
        icon: "👥",
        title: "Customer Focus",
        description: "Our clients are at the heart of everything we do."
      },
      {
        icon: "🛡️",
        title: "Integrity",
        description: "Honesty and transparency define our work ethics."
      },
      {
        icon: "📈",
        title: "Growth",
        description: "Continuous learning and improvement drive our success."
      }
    ];
  
    return (
      <section className="py-20 px-5 md:px-10 bg-gray-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-green-400">Core Values</span>
          </h2>
          <p className="text-xl mb-16 opacity-80">
            Driving Innovation, Integrity, and Excellence
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-800 bg-opacity-50 p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
              >
                <div className="text-5xl mb-6 animate-float">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }