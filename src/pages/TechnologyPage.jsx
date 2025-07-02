import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import AnimatedBackground from '../components/AnimatedBackground';

const { FiHome, FiZap, FiDollarSign, FiClock, FiTrendingUp, FiShield } = FiIcons;

const TechnologyPage = () => {
  const technologies = [
    {
      name: "WP Rentals",
      description: "Turnkey solution for vacation rentals and marketplaces",
      features: [
        "Complete booking system",
        "Payment gateway integration",
        "Property management tools",
        "Guest communication system",
        "Calendar synchronization",
        "Review & rating system"
      ],
      icon: FiHome,
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Crocoblock",
      description: "Powerful dynamic content tools for real estate or tour sites",
      features: [
        "JetEngine for custom post types",
        "Dynamic content creation",
        "Advanced filtering systems",
        "Custom fields & relationships",
        "Booking & appointment forms",
        "E-commerce integration"
      ],
      icon: FiZap,
      color: "from-purple-400 to-pink-400"
    }
  ];

  const benefits = [
    {
      icon: FiDollarSign,
      title: "Lower Costs",
      description: "Significantly cheaper than custom development while maintaining professional quality"
    },
    {
      icon: FiClock,
      title: "Fast Deployment",
      description: "Launch in weeks, not months, using proven, battle-tested solutions"
    },
    {
      icon: FiTrendingUp,
      title: "Scalable Growth",
      description: "Built to grow with your business, from startup to enterprise level"
    },
    {
      icon: FiShield,
      title: "Enterprise Reliability",
      description: "Trusted by thousands of businesses worldwide for mission-critical operations"
    }
  ];

  const comparison = [
    {
      aspect: "Development Time",
      traditional: "6-12 months",
      ourApproach: "2-6 weeks",
      advantage: "10x faster"
    },
    {
      aspect: "Initial Cost",
      traditional: "$50,000+",
      ourApproach: "$5,000-15,000",
      advantage: "70% savings"
    },
    {
      aspect: "Maintenance",
      traditional: "High ongoing costs",
      ourApproach: "Predictable monthly fees",
      advantage: "Budget friendly"
    },
    {
      aspect: "Updates",
      traditional: "Expensive custom work",
      ourApproach: "Regular plugin updates",
      advantage: "Always current"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Why WP Rentals & Crocoblock?
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use proven, enterprise-grade tools that deliver professional results at a fraction of the cost and time
            </p>
          </motion.div>

          {/* Technology Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                    <SafeIcon icon={tech.icon} className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`}></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={benefit.icon} className="text-xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">Our Approach vs Traditional Development</h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-purple-500/20">
                      <th className="text-left p-6 text-white font-semibold">Aspect</th>
                      <th className="text-left p-6 text-white font-semibold">Traditional Agency</th>
                      <th className="text-left p-6 text-white font-semibold">Our Approach</th>
                      <th className="text-left p-6 text-white font-semibold">Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={index} className="border-b border-purple-500/10 last:border-0">
                        <td className="p-6 text-white font-medium">{item.aspect}</td>
                        <td className="p-6 text-gray-400">{item.traditional}</td>
                        <td className="p-6 text-cyan-400">{item.ourApproach}</td>
                        <td className="p-6 text-emerald-400 font-semibold">{item.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Difference?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's show you how these powerful tools can transform your business
              </p>
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Schedule a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;