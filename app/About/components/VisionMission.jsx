export default function VisionMission() {
    return (
      <section className="py-20 px-5 md:px-10 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-green-400">Vision & Mission</span>
          </h2>
          <p className="text-xl mb-16 opacity-80">
            Transforming ideas into reality with cutting-edge technology.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Vision Card */}
            <div className="relative bg-gray-800 bg-opacity-50 p-8 rounded-xl w-full md:w-1/2 max-w-md overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-2">🌍</span> Our Vision
                </h3>
                <p className="text-gray-300">
                  To set new industry standards by delivering innovative and scalable digital solutions that redefine success.
                </p>
              </div>
            </div>
            
            {/* Mission Card */}
            <div className="relative bg-gray-800 bg-opacity-50 p-8 rounded-xl w-full md:w-1/2 max-w-md overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="text-3xl mr-2">🚀</span> Our Mission
                </h3>
                <p className="text-gray-300">
                  Empowering businesses with intuitive, high-performance technology that drives impact and growth worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }