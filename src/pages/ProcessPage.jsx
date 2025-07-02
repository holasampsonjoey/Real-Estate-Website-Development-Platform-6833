import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiTarget, FiPalette, FiRocket, FiTool, FiArrowRight, FiCheck, FiClock } = FiIcons;

const ProcessPage = () => {
  const circlePattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  const steps = [
    {
      number: '01',
      icon: FiPhone,
      title: 'Discovery & Fit Check',
      subtitle: 'No-pressure intro call',
      description: 'We start with a short discovery call to understand your goals, current challenges, and what success looks like for your business. We only move forward if we\'re the right fit.',
      duration: '30 minutes',
      deliverables: ['Business needs assessment', 'Technical requirements', 'Timeline discussion', 'Go/no-go decision'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: FiTarget,
      title: 'Strategy & Structure',
      subtitle: 'Plan the sitemap and layout',
      description: 'We plan the sitemap, user flow, and technical architecture using tools like Figma or Relume. This ensures your site solves the right problems from day one.',
      duration: '3-5 days',
      deliverables: ['Site architecture', 'Wireframes & mockups', 'Content strategy', 'Technical specifications'],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      number: '03',
      icon: FiPalette,
      title: 'Design & Development',
      subtitle: 'Built with proven tools',
      description: 'Your site is built in WordPress using WP Rentals or Crocoblock. We work in iterations, getting your input at every stage to ensure it meets your vision.',
      duration: '2-3 weeks',
      deliverables: ['Custom design system', 'Fully functional website', 'Mobile optimization', 'Content management'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: '04',
      icon: FiRocket,
      title: 'Final Review & Launch',
      subtitle: 'Go live with confidence',
      description: 'After your approval, we handle the launch process. We include 30 days of post-launch support to make sure everything works perfectly for your business.',
      duration: '2-3 days',
      deliverables: ['Final testing & QA', 'Live website launch', 'Training materials', '30-day support'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      number: '05',
      icon: FiTool,
      title: 'Ongoing SEO & Maintenance',
      subtitle: 'Optional monthly plans',
      description: 'Keep your site performing at its best with our optional maintenance plans covering SEO, backups, plugin updates, and performance optimization.',
      duration: 'Ongoing',
      deliverables: ['SEO optimization', 'Regular backups', 'Security updates', 'Performance monitoring'],
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  const timeline = [
    { week: 'Week 1', tasks: ['Discovery call', 'Strategy planning', 'Design mockups'] },
    { week: 'Week 2', tasks: ['Development begins', 'Core functionality', 'First review'] },
    { week: 'Week 3', tasks: ['Content integration', 'Testing & refinement', 'Client feedback'] },
    { week: 'Week 4', tasks: ['Final adjustments', 'Launch preparation', 'Go live!'] }
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
                A Simple Process
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Built for Real Businesses
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every project starts with a short discovery call. From there, we guide you through a proven system designed to deliver clear, functional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center`}>
                      <SafeIcon icon={step.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                        Step {step.number}
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900">{step.title}</h2>
                      <p className="text-lg text-slate-600">{step.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiClock} className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600">{step.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">What you get:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <div className={`w-80 h-80 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-8xl font-bold text-white/20 mb-4">{step.number}</div>
                      <SafeIcon icon={step.icon} className="w-16 h-16 text-white mx-auto" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
                Typical Project Timeline
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most projects are completed within 4 weeks from start to launch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{week.week}</h3>
                <div className="space-y-2">
                  {week.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-slate-600 text-sm">
                      <SafeIcon icon={FiCheck} className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Let's have a quick discovery call to see if we're the right fit for your business.
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
                <span>Schedule Discovery Call</span>
                <SafeIcon icon={FiArrowRight} className="w-6 h-6" />
              </a>
            </motion.div>
            
            <p className="text-slate-400 mt-4">30 minutes • No pressure • No commitment</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;