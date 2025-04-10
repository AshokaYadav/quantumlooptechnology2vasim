export default function Technologies() {
    const techs = [
      {
        img: "https://i.pinimg.com/736x/ca/e1/b4/cae1b4f6b223fe5a7bb712b680cffa67.jpg",
        name: "HTML5"
      },
      {
        img: "https://i.pinimg.com/736x/e4/3e/4c/e43e4cd41ddffc21d2e6600dfca20306.jpg",
        name: "CSS3"
      },
      {
        img: "https://i.pinimg.com/736x/68/d9/1a/68d91a4a0c40857674fbd3a22b9f0b03.jpg",
        name: "JavaScript"
      },
      {
        img: "https://i.pinimg.com/736x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg",
        name: "React.js"
      },
      {
        img: "https://i.pinimg.com/736x/a4/52/ea/a452eae371f079b141494c5aff07a140.jpg",
        name: "Next.js"
      },
      {
        img: "https://i.pinimg.com/736x/c1/78/5d/c1785d50a929254419fa4aad0560b058.jpg",
        name: "Bootstrap"
      },
      {
        img: "https://i.pinimg.com/736x/f3/4a/02/f34a0218dd2e38726c52ac763df55fa7.jpg",
        name: "Node.js"
      },
      {
        img: "https://i.pinimg.com/736x/86/e5/5d/86e55d4367f4dbeec45937d747b8eff2.jpg",
        name: "MongoDB"
      }
    ];
  
    return (
      <section className="py-20 px-5 md:px-10 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Technologies We <span className="text-green-400">Use</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
          {techs.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img 
                src={tech.img} 
                alt={tech.name} 
                className="w-16 h-16 object-contain mb-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }