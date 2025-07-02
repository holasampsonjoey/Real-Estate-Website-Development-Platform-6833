import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSettings, FiLayers, FiPalette, FiMap, FiZap, FiShield, FiCheck, FiArrowRight } = FiIcons;

const ServicesPage = () => {
  const circlePattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  const services = [
    {
      icon: FiSettings,
      title: 'WP Rentals Setup & Customization',
      description: 'Complete setup and customization of WP Rentals for vacation rental websites, property management, and booking systems.',
      features: ['Custom property listings', 'Booking calendar integration', 'Payment gateway setup', 'Guest management system'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiLayers,
      title: 'Dynamic Website Creation with Crocoblock',
      description: 'Build powerful, dynamic websites using Crocoblock JetEngine for real estate, tours, and complex business needs.',
      features: ['Custom post types', 'Dynamic content display', 'Advanced filtering', 'Database integration'],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: FiPalette,
      title: 'Visual Design & Development',
      description: 'Professional design using Elementor, Figma, and WordPress to create stunning, conversion-focused websites.',
      features: ['Custom Elementor templates', 'Figma design systems', 'Mobile-first approach', 'Brand integration'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiMap,
      title: 'Listings & Booking Management',
      description: 'Complete property listings, tour bookings, and interactive maps to showcase your offerings effectively.',
      features: ['Interactive property maps', 'Advanced search filters', 'Booking automation', 'Inventory management'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: FiZap,
      title: 'SEO & Performance Optimization',
      description: 'Speed optimization, SEO setup, and mobile-first design to ensure your site performs and ranks well.',
      features: ['Page speed optimization', 'SEO best practices', 'Mobile responsiveness', 'Core Web Vitals'],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: FiShield,
      title: 'Ongoing Support & Maintenance',
      description: 'Continuous support, security updates, and maintenance to keep your website running smoothly.',
      features: ['Regular backups', 'Security monitoring', 'Plugin updates', '24/7 support'],
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$2,997',
      description: 'Perfect for small businesses getting started',
      features: [
        'WP Rentals or Crocoblock setup',
        'Basic customization',
        'Mobile responsive design',
        '5 pages included',
        '30 days support',
        'Basic SEO setup'
      ],
      popular: false,
      gradient: 'from-slate-600 to-slate-700'
    },
    {
      name: 'Professional',
      price: '$4,997',
      description: 'Most popular for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced customization',
        'Custom booking system',
        'Up to 15 pages',
        '60 days support',
        'Advanced SEO & speed optimization',
        'Payment gateway integration',
        'Analytics setup'
      ],
      popular: true,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Enterprise',
      price: '$7,997',
      description: 'For established businesses with complex needs',
      features: [
        'Everything in Professional',
        'Fully custom development',
        'Multi-language support',
        'Unlimited pages',
        '90 days support',
        'Custom integrations',
        'Advanced automation',
        'Priority support',
        'Training included'
      ],
      popular: false,
      gradient: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
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
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Services That Actually
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Work for Your Business
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We specialize in WP Rentals and Crocoblock to build websites that solve real business problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50">
          <div 
            className="absolute inset-0 opacity-50"
            style={{ backgroundImage: `url("${circlePattern}")` }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent">
                Transparent, Fair Pricing
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              No hidden fees, no surprises. Choose the package that fits your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`relative p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white scale-105' : 'bg-white'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.price}
                  </div>
                  <p className={`${pkg.popular ? 'text-blue-100' : 'text-slate-600'}`}>
                    {pkg.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <SafeIcon 
                        icon={FiCheck} 
                        className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-green-300' : 'text-emerald-500'}`} 
                      />
                      <span className={`${pkg.popular ? 'text-blue-100' : 'text-slate-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    pkg.popular
                      ? 'bg-white text-cyan-600 hover:bg-slate-50'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg'
                  }`}
                >
                  <span>Get Started</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              All packages include a 30-day money-back guarantee
            </p>
            <p className="text-slate-500 text-sm">
              Need something custom? <a href="#" className="text-cyan-600 hover:underline">Let's talk about your specific needs</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;