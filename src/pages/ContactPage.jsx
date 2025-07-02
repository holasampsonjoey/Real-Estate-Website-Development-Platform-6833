import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import AnimatedBackground from '../components/AnimatedBackground';

const { FiMail, FiPhone, FiMapPin, FiSend, FiCalendar, FiMessageSquare } = FiIcons;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: FiCalendar,
      title: "Schedule a Call",
      description: "Book a free 15-minute discovery call to discuss your project",
      action: "Schedule Now",
      color: "from-cyan-400 to-blue-400"
    },
    {
      icon: FiMail,
      title: "Email Us",
      description: "Send us a detailed message about your requirements",
      action: "hello@agentebroker.com",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: FiMessageSquare,
      title: "WhatsApp Chat",
      description: "Quick questions? Chat with us directly on WhatsApp",
      action: "Start Chat",
      color: "from-emerald-400 to-teal-400"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Most projects are completed within 2-6 weeks, depending on complexity and your responsiveness during the review process."
    },
    {
      question: "Do you work with businesses outside your three main niches?",
      answer: "While we specialize in Real Estate, Vacation Rentals, and Tours, we occasionally work with similar businesses. Contact us to discuss your specific needs."
    },
    {
      question: "What's included in the 30-day post-launch support?",
      answer: "We provide bug fixes, minor adjustments, training on how to use your new website, and technical support to ensure everything runs smoothly."
    },
    {
      question: "Can you integrate with my existing booking system?",
      answer: "Yes, we can often integrate with existing systems or help you migrate to a more powerful solution like WP Rentals."
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
                Let's Build Your Business
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to get started? Choose the method that works best for you, or fill out the form below to tell us about your business.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-6`}>
                  <SafeIcon icon={method.icon} className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                <p className="text-gray-300 mb-6">{method.description}</p>
                <button className={`bg-gradient-to-r ${method.color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Tell Us About Your Business</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Business Type</label>
                  <select
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select your business type</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="vacation-rental">Vacation Rental</option>
                    <option value="tour-operator">Tour Operator</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Current Website (if any)</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Tell us about your project *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What challenges are you facing? What do you hope to achieve with your new website?"
                    className="w-full bg-slate-700/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <SafeIcon icon={FiSend} />
                </button>
              </form>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;