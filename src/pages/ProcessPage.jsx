import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import AnimatedBackground from '../components/AnimatedBackground';

const { FiPhone, FiTarget, FiCode, FiCheckCircle, FiTrendingUp } = FiIcons;

const ProcessPage = () => {
  const steps = [
    {
      number: "01",
      icon: FiPhone,
      title: "Discovery & Fit Check",
      description: "No-pressure intro call to understand your goals. We only move forward if we're the right fit.",
      details: [
        "15-minute discovery call",
        "Understand your business needs",
        "Assess project scope",
        "Determine if we're a good match"
      ],
      color: "from-cyan-400 to-blue-400"
    },
    {
      number: "02",
      icon: FiTarget,
      title: "Strategy & Structure",
      description: "We plan the sitemap and layout with tools like Figma or Relume. This ensures the site solves the right problem from day one.",
      details: [
        "Detailed project planning",
        "Sitemap creation",
        "Wireframe development",
        "Content strategy planning"
      ],
      color: "from-purple-400 to-pink-400"
    },
    {
      number: "03",
      icon: FiCode,
      title: "Design & Development",
      description: "Your site is built in WordPress using WP Rentals or Crocoblock. We refine in steps with your input at every stage.",
      details: [
        "WordPress setup & configuration",
        "Custom design implementation",
        "Feature development",
        "Regular progress updates"
      ],
      color: "from-emerald-400 to-teal-400"
    },
    {
      number: "04",
      icon: FiCheckCircle,
      title: "Final Review & Launch",
      description: "After approval, we go live. We include 30 days of support post-launch to make sure it works for you.",
      details: [
        "Thorough testing process",
        "Client review & approval",
        "Live site deployment",
        "30-day post-launch support"
      ],
      color: "from-orange-400 to-red-400"
    },
    {
      number: "05",
      icon: FiTrendingUp,
      title: "Ongoing SEO & Maintenance",
      description: "Optional monthly plans for SEO, backups, plugin updates, and performance optimization.",
      details: [
        "Monthly SEO optimization",
        "Regular backups",
        "Security updates",
        "Performance monitoring"
      ],
      color: "from-indigo-400 to-purple-400"
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
                How We Work
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A Simple Process, Built for Real Businesses. Every project starts with a short discovery call. 
              From there, we guide you through a proven system designed to deliver clear, functional results.
            </p>
          </motion.div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <SafeIcon icon={step.icon} className="text-2xl text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-400">Step {step.number}</span>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3 text-gray-400">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-1 flex justify-center">
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.color} opacity-20 flex items-center justify-center`}>
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} opacity-60 flex items-center justify-center`}>
                      <SafeIcon icon={step.icon} className="text-3xl text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Connector */}
          <div className="hidden lg:block absolute left-1/2 top-96 bottom-32 w-px bg-gradient-to-b from-cyan-400/20 via-purple-400/20 to-pink-400/20 transform -translate-x-1/2"></div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's begin with a simple discovery call to see if we're the right fit
              </p>
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Schedule Your Discovery Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;