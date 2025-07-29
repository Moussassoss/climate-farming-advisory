import React from 'react';
import { Sprout, Heart, Globe, Shield, Zap, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-emerald-400 to-emerald-600 p-3 rounded-full">
                  <Sprout className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AgriVision
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Revolutionizing agriculture through AI-powered climate intelligence, helping farmers make data-driven decisions for sustainable and profitable farming.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="group bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-3 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
              </a>
              <a href="#" className="group bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-3 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-110">
                <Github className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
              </a>
              <a href="#" className="group bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-3 rounded-xl border border-blue-600/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <Zap className="h-5 w-5 mr-2 text-yellow-400" />
              Platform
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center group">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Crop Recommendations
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Weather Analytics
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Satellite Mapping
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 flex items-center group">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                AI Insights
              </a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-blue-400" />
              Connect
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 p-2 rounded-lg mr-3 border border-emerald-500/30">
                  <Mail className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-sm">hello@agrivision.ai</span>
              </li>
              <li className="flex items-center text-gray-300">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-2 rounded-lg mr-3 border border-blue-500/30">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-sm">+1 (555) 123-FARM</span>
              </li>
              <li className="flex items-start text-gray-300">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-2 rounded-lg mr-3 border border-purple-500/30 mt-0.5">
                  <MapPin className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-sm leading-relaxed">Agricultural Innovation Hub<br />Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Features Showcase */}
        <div className="border-t border-gray-700/50 pt-12 mb-12">
          <h4 className="text-2xl font-bold text-center text-white mb-8 flex items-center justify-center">
            <Shield className="h-6 w-6 mr-3 text-emerald-400" />
            Powered by Advanced Technology
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 p-6 rounded-2xl border border-emerald-500/20 text-center group hover:border-emerald-400/40 transition-all duration-300">
              <div className="text-4xl mb-3">🛰️</div>
              <h5 className="font-bold text-emerald-400 mb-2">Satellite Intelligence</h5>
              <p className="text-gray-400 text-sm">Real-time satellite imagery and geospatial analysis</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl border border-blue-500/20 text-center group hover:border-blue-400/40 transition-all duration-300">
              <div className="text-4xl mb-3">🧠</div>
              <h5 className="font-bold text-blue-400 mb-2">Machine Learning</h5>
              <p className="text-gray-400 text-sm">Advanced AI algorithms for crop optimization</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 p-6 rounded-2xl border border-purple-500/20 text-center group hover:border-purple-400/40 transition-all duration-300">
              <div className="text-4xl mb-3">🌡️</div>
              <h5 className="font-bold text-purple-400 mb-2">Climate Modeling</h5>
              <p className="text-gray-400 text-sm">Precision weather forecasting and climate analysis</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-2 text-red-400 animate-pulse" />
              <span>for sustainable agriculture</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
              <span>© 2025 AgriVision. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-blue-400 via-purple-400 to-pink-400 animate-gradient"></div>
    </footer>
  );
};

export default Footer;