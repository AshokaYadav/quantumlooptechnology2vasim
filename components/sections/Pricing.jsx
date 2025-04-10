export default function Pricing() {
    const plans = [
      {
        name: "Basic",
        price: "$49",
        features: [
          { text: "Responsive Website", included: true },
          { text: "Basic SEO", included: true },
          { text: "1 Month Support", included: true },
          { text: "Custom Features", included: false }
        ],
        popular: false
      },
      {
        name: "Standard",
        price: "$99",
        features: [
          { text: "Custom Design", included: true },
          { text: "SEO Optimization", included: true },
          { text: "3 Months Support", included: true },
          { text: "Performance Optimization", included: true }
        ],
        popular: true
      },
      {
        name: "Premium",
        price: "$199",
        features: [
          { text: "Advanced UI/UX", included: true },
          { text: "Full SEO & Marketing", included: true },
          { text: "6 Months Support", included: true },
          { text: "Custom Integrations", included: true }
        ],
        popular: false
      }
    ];
  
    return (
      <section id="pricing" className="py-20 px-5 md:px-10 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-16">
          Our <span className="text-green-400">Pricing Plans</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-gray-800 p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                plan.popular 
                  ? 'border-2 border-green-400 transform md:-translate-y-5' 
                  : 'border border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="bg-green-400 text-black font-bold py-1 px-3 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6 text-green-400">
                {plan.price}<span className="text-lg">/month</span>
              </p>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    {feature.included ? (
                      <span className="text-green-400 mr-2">✓</span>
                    ) : (
                      <span className="text-red-400 mr-2">✗</span>
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                plan.popular 
                  ? 'bg-green-400 text-black hover:bg-green-500' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }