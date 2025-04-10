export default function About() {
    return (
      <section className="py-20 px-5 md:px-10 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fadeInLeft">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-green-400">Quantem Loop Technology</span>
            </h2>
            <p className="mb-4 text-lg">
              Quantem Loop Technology is dedicated to delivering innovative and cutting-edge technological solutions. 
              Our expert team ensures top-tier development, marketing, and branding services to help your business thrive.
            </p>
            <p className="mb-6 text-lg">
              We focus on modern web experiences, creating futuristic and professional designs with outstanding animations and interactions.
            </p>
            <a href="#" className="inline-block px-6 py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors">
              Learn More
            </a>
          </div>
          
          <div className="md:w-1/2 animate-fadeInRight">
            <img 
              src="https://i.pinimg.com/originals/19/e1/71/19e171391727335f510db47a13269d2d.gif" 
              alt="About Quantem Loop Technology" 
              className="w-full max-w-lg rounded-xl shadow-2xl shadow-green-400/20"
            />
          </div>
        </div>
      </section>
    );
  }