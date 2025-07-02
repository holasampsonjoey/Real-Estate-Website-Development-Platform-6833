import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram } = FiIcons;

const Footer = () => {
  const svgPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: `url("${svgPattern}")` }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AB</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AgenteBroker
              </span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              We build powerful websites for Real Estate, Vacation Rentals & Tours using proven tools like WP Rentals and Crocoblock. Stop wasting time and money - we already have the solutions.
            </p>
            <div className="flex space-x-4">
              {[FiLinkedin, FiTwitter, FiInstagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                >
                  <SafeIcon icon={Icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <div className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/services', label: 'Services' },
                { path: '/process', label: 'Process' },
                { path: '/why-us', label: 'Why Us' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-cyan-400" />
                <span>hello@agentebroker.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-cyan-400" />
                <span>Remote Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 AgenteBroker.com. All rights reserved. Built with care for your business success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;