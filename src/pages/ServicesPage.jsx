import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import AnimatedBackground from '../components/AnimatedBackground';

const { FiSettings, FiZap, FiPalette, FiMap, FiSearch, FiShield } = FiIcons;

const ServicesPage = () => {
  const services = [
    {
      icon: FiSettings,
      title: "Setup & Customization of WP Rentals",
      description: "Complete installation, configuration, and customization of WP Rentals theme to match your brand and business requirements.",
      features: ["Theme installation & setup", "Custom branding", "Payment gateway integration", "Booking system configuration"]
    },
    {
      icon: FiZap,
      title: "Dynamic Website Creation with Crocoblock JetEngine",
      description: "Build powerful, dynamic websites with custom post types, fields, and relationships using Crocoblock's JetEngine.",
      features: ["Custom post types", "Dynamic content", "Advanced filtering", "Database relationships"]
    },
    {
      icon: FiPalette,
      title: "Visual Design using Elementor & WordPress",
      description: "Create stunning, responsive designs that convert visitors into customers using modern design principles.",
      features: ["Responsive design", "Custom layouts", "Brand integration", "Conversion optimization"]
    },
    {
      icon: FiMap,
      title: "Listings Management & Booking Systems",
      description: "Comprehensive property and tour management with integrated booking, calendar, and payment systems.",
      features: ["Property listings", "Booking calendars", "Payment processing", "Guest management"]
    },
    {
      icon: FiSearch,
      title: "SEO Setup & Speed Optimization",
      description: "Technical SEO implementation and performance optimization to ensure your site ranks well and loads fast.",
      features: ["On-page SEO", "Speed optimization", "Mobile optimization", "Schema markup"]
    },
    {
      icon: FiShield,
      title: "Ongoing Support & Maintenance",
      description: "Continuous support, updates, backups, and maintenance to keep your website secure and running smoothly.",
      features: ["Regular backups", "Security updates", "Performance monitoring", "24/7 support"]
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
                What We Offer
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive website solutions tailored for Real Estate, Vacation Rentals, and Tour Operators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={service.icon} className="text-xl text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss which services would work best for your business
              </p>
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;