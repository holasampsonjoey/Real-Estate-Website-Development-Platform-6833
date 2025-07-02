import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBriefcase, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiBriefcase} className="text-2xl text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AgenteBroker
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Specialized websites for Real Estate, Vacation Rentals, and Tour Operators. 
              We use proven tools like WP Rentals and Crocoblock to deliver fast, reliable results.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Real Estate Websites</li>
              <li>Vacation Rental Platforms</li>
              <li>Tour Operator Sites</li>
              <li>WP Rentals Setup</li>
              <li>Crocoblock Development</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="text-cyan-400" />
                <span>hello@agentebroker.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="text-cyan-400" />
                <span>Schedule a Call</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AgenteBroker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;