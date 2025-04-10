export default function Team() {
    const teamMembers = [
      {
        img: "https://i.pinimg.com/736x/75/b5/2a/75b52a1d81e6a976ad994c5d9a117674.jpg",
        name: "John Doe",
        position: "Founder & CEO"
      },
      {
        img: "https://i.pinimg.com/736x/de/29/55/de2955522773109353d179f9e722b11d.jpg",
        name: "Jane Smith",
        position: "Lead Developer"
      },
      {
        img: "https://i.pinimg.com/736x/02/07/a3/0207a35d940ab6c5bbfcab9c94005ebe.jpg",
        name: "Michael Lee",
        position: "UI/UX Designer"
      }
    ];
  
    return (
      <section className="py-20 px-5 md:px-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Our <span className="text-green-400">Team</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-700 bg-opacity-30 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
            >
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-80 object-cover object-top"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-green-400">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }