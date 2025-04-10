import { useEffect, useState } from 'react';

export default function Achievements() {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    awards: 0,
    years: 0
  });

  const achievements = [
    { icon: "👥", target: 500, text: "Happy Clients", key: "clients" },
    { icon: "📊", target: 120, text: "Projects Completed", key: "projects" },
    { icon: "🏆", target: 15, text: "Awards Won", key: "awards" },
    { icon: "⏳", target: 5, text: "Years of Experience", key: "years" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const element = document.querySelector('#achievements');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 100;
    const increment = achievements.map(a => a.target / steps);
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounters(prev => ({
        clients: Math.min(prev.clients + increment[0], achievements[0].target),
        projects: Math.min(prev.projects + increment[1], achievements[1].target),
        awards: Math.min(prev.awards + increment[2], achievements[2].target),
        years: Math.min(prev.years + increment[3], achievements[3].target)
      }));
      
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
  };

  return (
    <section id="achievements" className="py-20 px-5 md:px-10 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-16">
        Our <span className="text-green-400">Achievements</span>
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="bg-gray-700 bg-opacity-30 p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
          >
            <div className="text-4xl mb-4">{achievement.icon}</div>
            <h3 className="text-3xl font-bold mb-2 text-green-400">
              {Math.floor(counters[achievement.key])}+
            </h3>
            <p className="text-gray-300">{achievement.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}