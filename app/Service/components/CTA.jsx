export default function CTA() {
    return (
      <section 
        className="py-32 px-5 md:px-10 text-white text-center relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.pinimg.com/736x/47/ca/1c/47ca1c15424dc29d202ca45928484fa2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your ideas into reality with WasimTech. Let's create something incredible together.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-green-400 text-black font-bold rounded-full hover:bg-green-500 transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          </a>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      </section>
    );
  }