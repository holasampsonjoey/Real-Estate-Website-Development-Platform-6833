import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiCalendar, FiMap, FiArrowRight, FiCheck, FiStar, FiUsers, FiTrendingUp } = FiIcons;

const HomePage = () => {
  const trianglePattern = "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L90 90 L10 90 Z' fill='none' stroke='%23e2e8f0' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E";
  const diamondPattern = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20L0 0h40L20 20z'/%3E%3C/g%3E%3C/svg%3E";

  const niches = [
    {
      icon: FiHome,
      title: 'Real Estate Agents & Developers',
      description: 'Dynamic property listings, virtual tours, and lead capture systems that actually convert.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: FiCalendar,
      title: 'Vacation Rental Hosts & Managers',
      description: 'Complete booking systems, availability calendars, and guest management tools.',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 to-teal-50'
    },
    {
      icon: FiMap,
      title: 'Tour Operators & Experience Providers',
      description: 'Showcase your tours, handle bookings, and manage customer experiences seamlessly.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  const benefits = [
    'No more DIY website builders that break',
    'Skip expensive agencies that don\'t understand your business',
    'Get a professional site in weeks, not months',
    'Built with proven tools that actually work'
  ];

  const stats = [
    { number: '150+', label: 'Websites Delivered', icon: FiTrendingUp },
    { number: '98%', label: 'Client Satisfaction', icon: FiStar },
    { number: '30', label: 'Days Average Build', icon: FiCalendar },
    { number: '24/7', label: 'Support Available', icon: FiUsers }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div 
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: `url("${trianglePattern}")` }}
          ></div>
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                You Don't Need to
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Start From Scratch
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We Already Have the Tools. Stop wasting time and money on broken DIY builders or agencies that don't get your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Schedule Free Strategy Call</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/process"
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300"
                >
                  See How It Works
                </Link>
              </motion.div>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-2 text-slate-600"
                >
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                We Specialize in Your Business
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most of our clients came to us after trying DIY builders or expensive agencies. We fix that with specialized solutions for your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {niches.map((niche, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${niche.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${niche.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <SafeIcon icon={niche.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{niche.title}</h3>
                <p className="text-slate-600 leading-relaxed">{niche.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          <div 
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: `url("${diamondPattern}")` }}
          ></div>
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Business the Smart Way?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stop wasting time on solutions that don't work. Let's build something that actually grows your business.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-xl font-semibold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3"
              >
                <span>Get Your Free Strategy Call</span>
                <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
              </Link>
            </motion.div>
            
            <p className="text-slate-400 mt-4">No pressure. No commitment. Just clarity on what's possible.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;