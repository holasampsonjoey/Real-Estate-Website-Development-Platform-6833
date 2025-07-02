import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTool, FiZap, FiDollarSign, FiUsers, FiCheck, FiX, FiArrowRight, FiStar, FiAward, FiShield } = FiIcons;

const WhyUsPage = () => {
  const circlePattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  const benefits = [
    {
      icon: FiTool,
      title: 'WP Rentals: Turnkey Solution',
      description: 'Complete vacation rental and marketplace solution with built-in booking systems, payment processing, and property management.',
      features: ['Booking calendar integration', 'Payment gateway ready', 'Property management tools', 'Guest communication system'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiZap,
      title: 'Crocoblock: Dynamic Content Power',
      description: 'Powerful dynamic content tools perfect for real estate listings, tour packages, and complex business needs.',
      features: ['Custom post types', 'Advanced filtering', 'Dynamic templates', 'Database integration'],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: FiDollarSign,
      title: 'Fast Deployment & Lower Costs',
      description: 'Pre-built solutions mean faster delivery and lower costs compared to custom development from scratch.',
      features: ['Weeks not months', '50-70% cost savings', 'Proven reliability', 'Immediate results'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiUsers,
      title: 'Beautiful Design & UX',
      description: 'Professional designs that convert visitors into customers, optimized for your specific industry.',
      features: ['Mobile-first design', 'Conversion optimized', 'Brand integration', 'User-friendly interface'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const comparison = {
    us: {
      title: 'AgenteBroker.com',
      features: [
        'Specialized in your industry',
        'Proven tools (WP Rentals/Crocoblock)',
        'Fast delivery (2-4 weeks)',
        'Transparent pricing',
        'Ongoing support included',
        'Mobile-first approach',
        'SEO optimized',
        'Conversion focused'
      ],
      gradient: 'from-cyan-500 to-blue-600'
    },
    others: {
      title: 'Traditional Dev Agencies',
      features: [
        'Generic solutions',
        'Custom development from scratch',
        'Long timelines (3-6 months)',
        'Hidden costs & overruns',
        'Support costs extra',
        'Desktop-first thinking',
        'SEO as afterthought',
        'Feature-focused'
      ],
      gradient: 'from-slate-500 to-slate-600'
    }
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Mountain View Rentals',
      text: 'After wasting 6 months with a DIY builder, AgenteBroker delivered exactly what we needed in 3 weeks. Our bookings increased 40% in the first month.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      business: 'Rodriguez Real Estate',
      text: 'The WP Rentals setup they created handles all our property listings and lead capture perfectly. Best investment we\'ve made for our business.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      business: 'Adventure Tours Hawaii',
      text: 'They understood our tour business from day one. The booking system and dynamic content display exceeded our expectations.',
      rating: 5
    }
  ];

  const stats = [
    { number: '150+', label: 'Successful Projects' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '30', label: 'Average Days to Launch' },
    { number: '40%', label: 'Average Revenue Increase' }
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
                Why WP Rentals &
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Crocoblock Work
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop reinventing the wheel. These proven tools solve real business problems faster and cheaper than custom development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{benefit.description}</p>
                
                <div className="space-y-2">
                  {benefit.features.map((feature, idx) => (
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

      {/* Comparison Section */}
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
                The Smart Choice
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See why businesses choose our proven approach over traditional development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Us */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-6">
                  <SafeIcon icon={FiAward} className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{comparison.us.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {comparison.us.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Others */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl border-2 border-slate-200 relative"
            >
              <div className="flex items-center space-x-2 mb-6">
                <SafeIcon icon={FiShield} className="w-8 h-8 text-slate-400" />
                <h3 className="text-2xl font-bold text-slate-900">{comparison.others.title}</h3>
              </div>
              
              <div className="space-y-3">
                {comparison.others.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <SafeIcon icon={FiX} className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20"
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
                What Our Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.business}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
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
              Ready to Make the Smart Choice?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stop wasting time on solutions that don't work. Let's build something that actually grows your business.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="#contact"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-xl font-semibold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3"
              >
                <span>Start Your Project Today</span>
                <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
              </a>
            </motion.div>
            
            <p className="text-slate-400 mt-4">Free strategy call • No pressure • Clear next steps</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;