export default function Portfolio() {
    const projects = [
      {
        img: "https://i.pinimg.com/736x/54/1b/21/541b211af18bb5fc26f3612e72c2720a.jpg",
        title: "UI/UX design",
        description: "Innovative website built with modern UI/UX trends."
      },
      {
        img: "https://i.pinimg.com/736x/2f/36/b0/2f36b001ece4db79c96b18c9d532615b.jpg",
        title: "App animations",
        description: "High-performance app with smooth animations."
      },
      {
        img: "https://i.pinimg.com/736x/60/ab/f9/60abf9f0c6d7c5904f929f2d636d09c9.jpg",
        title: "Business solution",
        description: "Professional business solution for global clients."
      }
    ];
  
    return (
      <section id="portfolio" className="py-20 px-5 md:px-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Our <span className="text-green-400">Work</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl group"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-green-500 bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }