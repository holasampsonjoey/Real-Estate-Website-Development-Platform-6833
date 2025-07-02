import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import AnimatedBackground from '../components/AnimatedBackground';

const { FiHome, FiMap, FiCalendar, FiArrowRight, FiCheck, FiZap, FiTrendingUp } = FiIcons;

const HomePage = () => {
  const niches = [
    {
      icon: FiHome,
      title: "Real Estate Agents & Developers",
      description: "Professional property listings, IDX integration, lead capture forms, and virtual tours that convert visitors into clients.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: FiMap,
      title: "Vacation Rental Hosts & Managers",
      description: "Complete booking systems, calendar management, payment processing, and guest communication tools.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: FiCalendar,
      title: "Tour Operators & Experience Businesses",
      description: "Dynamic booking calendars, package management, customer reviews, and seamless payment integration.",
      color: "from-emerald-400 to-teal-400"
    }
  ];

  const benefits = [
    "No expensive custom development needed",
    "Launch in weeks, not months",
    "Built with proven, scalable tools",
    "Mobile-first, SEO optimized",
    "Ongoing support included"
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                You Don't Need to
              </span>
              <br />
              <span className="text-white">Start From Scratch</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We Already Have the Tools. Most of our clients came to us after trying DIY builders or expensive agencies. We fix that.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Schedule a Free Strategy Call</span>
                <SafeIcon icon={FiArrowRight} />
              </Link>
              
              <Link
                to="/process"
                className="border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Niche Sections */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            Specialized Solutions for Your Business
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {niches.map((niche, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${niche.color} flex items-center justify-center mb-6`}>
                    <SafeIcon icon={niche.icon} className="text-2xl text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{niche.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{niche.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Approach?
            </h2>
            <p className="text-xl text-gray-300">
              We use WP Rentals and Crocoblock to deliver fast, reliable results
            </p>
          </motion.div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="text-white text-sm" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Business the Smart Way?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can create a powerful website for your business using proven tools and processes.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start Your Project Today</span>
              <SafeIcon icon={FiArrowRight} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;