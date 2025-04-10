export default function JoinTeam() {
    const jobs = [
      {
        title: "Frontend Developer",
        description: "We need a creative developer proficient in HTML, CSS, JavaScript, and React.js."
      },
      {
        title: "Backend Developer",
        description: "Looking for an expert in Node.js, Express.js, and databases like MongoDB or MySQL."
      },
      {
        title: "UI/UX Designer",
        description: "Join us to create stunning user experiences using Figma, Adobe XD, and CSS animations."
      }
    ];
  
    const perks = [
      "🚀 Work on exciting projects",
      "🏆 Competitive salary & benefits",
      "📈 Career growth opportunities",
      "🌍 Flexible remote work options",
      "🎯 Creative & supportive team"
    ];
  
    return (
      <section className="py-20 px-5 md:px-10 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Join Our <span className="text-green-400">Team</span>
            </h2>
            <p className="text-xl opacity-80">
              Be a part of something great! We are looking for talented individuals to grow with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {jobs.map((job, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-green-400">{job.title}</h3>
                <p className="mb-6 text-gray-300">{job.description}</p>
                <button className="w-full py-3 bg-green-400 text-black font-bold rounded-lg hover:bg-green-500 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Why Join Us?</h3>
            <ul className="space-y-4">
              {perks.map((perk, index) => (
                <li 
                  key={index}
                  className="text-xl opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }